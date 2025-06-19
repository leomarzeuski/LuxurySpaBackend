// src/api/companion/routes/companion.ts
export default {
    routes: [
        // Rota customizada para disponibilidade
        {
            method: 'GET',
            path: '/companions/:id/availability',
            handler: 'api::companion.companion.findAvailability',
            config: {
                auth: false, // pública para testes
            },
        },
        {
            method: 'POST',
            path: '/companions/:id/cancel-booking',
            handler: 'companion.cancelBooking',
            config: {
                auth: false, // ou true, se quiser proteção
            },
          },
    ],
};
  