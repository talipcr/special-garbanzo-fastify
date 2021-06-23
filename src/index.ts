import * as dotenv from 'dotenv';
import { fastify } from 'fastify';
import pino from 'pino';
import config from './config/config';
import db from './config/config.mongo';

dotenv.config();

// App Variables
if (!process.env.PORT && !config.mongo.url) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const uri = config.mongo.url;
const app = fastify({
	logger: pino({ level: 'info' }),
});

// Connect to Mongo
app.register(db, { uri });

// Log the request
app.addHook('onRequest', function (request, reply, done) {
	{
		console.log(
			`METHOD: [${request.method}] - URL: [${request.url}] - STATUS: [${reply.status}]`
		);
		done();
	}
});

// App Configuration
// app.register(require('cors')());

app.get('/', async (request, reply) => {
	reply.send({ message: 'hello' });
});

// Server Activation
const start = async () => {
	try {
		await app.listen(PORT);
		console.log(`Listening on port ${PORT}`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
