module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '192.168.99.100',
      port: 5432,
      user: 'team13',
      password: 'megahack',
      database: 'team13',
      charset: 'utf8',
    },
    migrations: {
      directory: `${__dirname}/db/development/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/development/seeds`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/db/production/migrations`,
    },
    seeds: {
      directory: `${__dirname}/db/production/seeds`,
    },
  },
};
