export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodbUrl: process.env.MONGODB_URL,
    mongodbDefaultLimit: +process.env.MONGODB_DEFAULT_LIMIT,
    port: +process.env.PORT
});