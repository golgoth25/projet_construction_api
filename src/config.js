const config = {
    app: {
      port: process.env.APP_PORT,
    },
    db: {
      client: process.env.DB_CLIENT,
      connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
    },    
  }
  
  module.exports = config