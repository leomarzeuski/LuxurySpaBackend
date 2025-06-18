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
        // (Aqui entram as rotas padrão se precisar)
    ],
};
  