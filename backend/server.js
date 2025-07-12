// backend/server.js
const fastify = require('fastify')({ logger: true });
const db = require('./database.js');

// Rota de teste
fastify.get('/', async (req, reply) => {
  return { message: "API Rubix funcionando!" };
});

// Iniciar o servidor
fastify.listen({ port: 3001 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log('🚀 Servidor rodando em http://localhost:3001');
});