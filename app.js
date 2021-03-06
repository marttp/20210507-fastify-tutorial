import Fastify from 'fastify';
import Route from './test/route.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import AutoLoad from 'fastify-autoload';
const fastify = Fastify({ logger: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

fastify.register(import('./plugins/index.js'));

fastify.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
});

fastify.register(Route);

fastify.listen(3000, () => {
  console.log('running on port 3000');
});
