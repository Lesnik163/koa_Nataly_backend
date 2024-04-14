Для того чтобы подключить сервер к своему хранилищу PostgreSQL создайте файл в корне типа .env со следующим содержанием:

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://vasia:7777@localhost:5432/Vasia_base",

где vasia - это обладатель БД (owner),

7777 - пароль, если есть , для доступа к вашей БД,

5432 - порт на котором работает БД,

/Vasia_base - название вашей БД после "/"
