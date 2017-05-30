var config = {
    expressPort: 2583,
    client: {
        mongodb: {
            defaultDatabase: 'mongopop',
            defaultCollection: 'simples',
            defaultUri: 'mongodb://localhost:27017'
        }
    }
};

module.exports = config;
