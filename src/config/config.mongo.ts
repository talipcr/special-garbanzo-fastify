import {
	FastifyInstance,
	FastifyPluginAsync,
	FastifyPluginOptions,
} from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';

// define options
export interface MyPluginOptions {
	uri: string;
}

const ConnectDB: FastifyPluginAsync<MyPluginOptions> = async (
	fastify: FastifyInstance,
	options: FastifyPluginOptions
) => {
	try {
		mongoose.connection.on('connected', () => {
			fastify.log.info({ actor: 'MongoDB' }, 'connected');
		});
		mongoose.connection.on('disconnected', () => {
			fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
		});

		const db = await mongoose.connect(options.uri, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.error(error);
	}
};
export default fp(ConnectDB);
