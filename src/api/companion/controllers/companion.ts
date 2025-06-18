// src/api/companion/controllers/companion.ts
import { factories } from '@strapi/strapi';
import fetch from 'node-fetch';

// 1) Defina o tipo customizado
type CompanionCustom = {
    event_type_id?: string;
    cal_api_key?: string;
    // Se tiver mais campos customizados, adicione aqui
};

// 2) Controller padrão + função customizada
export default factories.createCoreController('api::companion.companion', ({ strapi }) =>  ({
    // GET /companions/:id/availability
    async findAvailability(ctx) {
        const { id } = ctx.params;
        const { start, end } = ctx.query;

        // Aqui “mescla” os campos originais com os customizados
        const companion = await strapi.entityService.findOne('api::companion.companion', id) as CompanionCustom & Record<string, any>;

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

        const res = await fetch(`https://api.cal.com/v2/slots?${params}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'cal-api-version': '2024-09-04',
            },
        });

        if (!res.ok) return ctx.badRequest('Erro ao buscar slots no Cal.com');
        const data = await res.json();
        ctx.body = data.data;
    },

    // Outras funções customizadas aqui
}));
