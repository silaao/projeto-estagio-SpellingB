module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dump/sb.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    useNullAsDefault: true
  }
}
