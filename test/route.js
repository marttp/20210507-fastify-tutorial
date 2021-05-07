/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 */
export default async function (fastify, opts) {
  fastify.get('/tp', async function (request, reply) {
    reply.code(200).send('Got to TP Route');
  });
}
