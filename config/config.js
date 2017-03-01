module.exports =
{
  "development": {
    //"use_env_variable" : "DB_DEV_URL",
    "username": process.env.DB_DEV_USERNAME || 'root',
    "password": process.env.DB_DEV_PASSWORD || 'root',
    "database": process.env.DB_DEV_SCHEMA || 'nodejs_crud',
    "host"    : process.env.DB_DEV_HOST || 'localhost',
    "port"    : process.env.DB_DEV_PORT || '3306',
    "dialect": "mysql"
  },
  "test": {
    "url": process.env.DB_TEST_URL || 'postgres://postgres:password@localhost:5432/bookmark_test',
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DB_PROD_URL || 'postgres://postgres:password@localhost:5432/bookmark_test',
    "dialect": "postgres"
  }
};
