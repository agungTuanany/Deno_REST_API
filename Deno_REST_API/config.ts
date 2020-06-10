"use strict"
/*
 * A simple ts config
 * @note I do not know should I commit this database, since there is password?
 *
 */

// ## Buildin dependencies
import { POSTGRES_PWD } from "./.env.ts"



const dbCreds = {
    user     : "deno1",
    database : "deno_2",
    password : POSTGRES_PWD,
    hostname : "localhost",
    port     : 5432
}

export { dbCreds }
