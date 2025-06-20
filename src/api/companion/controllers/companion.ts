import { factories } from '@strapi/strapi';
import fetch from 'node-fetch';
import axios from 'axios';

type CompanionCustom = {
    event_type_id?: string;
    cal_api_key?: string;
    // Outros campos customizados
    data_cal_namespace?: string;
    data_cal_link?: string;
    name?: string;
    age?: number;
    location?: string;
    rating?: number;
    reviews?: number;
    price?: string;
    tags?: string[];
    description?: string;
    image?: any;
};

export default factories.createCoreController('api::companion.companion', ({ strapi }) => ({
    // GET /companions/:id/availability
    async findAvailability(ctx) {
        const { id } = ctx.params;
        const { start, end } = ctx.query;

        // Busca todos os dados da companion (incluindo todos os campos que o frontend precisa)
        const companion = await strapi.entityService.findOne('api::companion.companion', id, {
            // Remove fields property or only include fields that are defined in your Strapi model
            populate: {
                image: true, // Se houver relação de imagem (ajuste conforme seu modelo)
            }
        }) as CompanionCustom & Record<string, any>;

        if (!companion || !companion.event_type_id) {
            return ctx.badRequest('Companion ou event_type_id não encontrado');
        }

        const apiKey = companion.cal_api_key || process.env.CAL_API_TOKEN;

        const params = new URLSearchParams({
            eventTypeId: companion.event_type_id,
            start: (start as string) || new Date().toISOString().slice(0, 10),
            end: (end as string) || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
            timeZone: 'America/Sao_Paulo',
        }).toString();

        // Busca disponibilidade via Cal.com API
        let availability = [];
        try {
            const res = await fetch(`https://api.cal.com/v2/slots?${params}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'cal-api-version': '2024-09-04',
                },
            });
            if (!res.ok) {
                return ctx.badRequest('Erro ao buscar slots no Cal.com');
            }
            const data = await res.json();
            availability = data.data; // slots do Cal.com
        } catch (e) {
            return ctx.badRequest('Erro ao buscar disponibilidade externa');
        }

        // Retorna todos os dados da companion + disponibilidade
        ctx.body = {
            ...companion,
            availability_slots: availability
        };
    },

    // POST /companions/:id/cancel-booking
    async cancelBooking(ctx) {
        const { id } = ctx.params; // id do companion
        const { bookingUid, seatUid, cancellationReason } = ctx.request.body;

        // Busca companion
        const companion = await strapi.entityService.findOne('api::companion.companion', id);

        if (!companion) {
            return ctx.badRequest('Companion not found');
        }

        const calApiKey = companion.cal_api_key;
        if (!calApiKey) {
            return ctx.badRequest('cal_api_key not configured for this companion');
        }

        const headers = {
            'Authorization': `Bearer ${calApiKey}`,
            'cal-api-version': '2024-08-13',
            'Content-Type': 'application/json',
        };

        // Monta body do cancelamento
        let body: any = {};
        if (seatUid) {
            body.seatUid = seatUid; // attendee específico
        }
        if (cancellationReason) {
            body.cancellationReason = cancellationReason; // todos
        }

        try {
            const response = await axios.post(
                `https://api.cal.com/v2/bookings/${bookingUid}/cancel`,
                body,
                { headers }
            );
            ctx.send({
                status: response.data.status,
                data: response.data.data,
            });
        } catch (err) {
            ctx.status = err.response?.status || 500;
            ctx.body = {
                status: 'error',
                message: err.response?.data?.message || err.message,
            };
        }
    }
}));
