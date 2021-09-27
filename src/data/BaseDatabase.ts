import { Knex } from "knex"
import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3306

export abstract class BaseDatabase {
    private static connection: Knex | null

    protected getConnection(): Knex {
        if (!BaseDatabase.connection) {
            BaseDatabase.connection = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    port: PORT as number,
                    multipleStatements: true
                }
            })
        }

        return BaseDatabase.connection
    }
}