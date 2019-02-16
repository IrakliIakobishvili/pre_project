const env = process.env.NODE_ENV || 'development';

export default {
    isDev: env === 'Development',
    isTest: env === 'testing',
    port: 8000,
    dbUrl: 'mongodb://irakli:irakli123@ecommerce-shard-00-00-pca9p.mongodb.net:27017,ecommerce-shard-00-01-pca9p.mongodb.net:27017,ecommerce-shard-00-02-pca9p.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=Ecommerce-shard-0&authSource=admin&retryWrites=true',
    secrets: {
        jwt: "kjb32kjkjbskjabskjbad",
        jwtExp: '100d'
    }
}