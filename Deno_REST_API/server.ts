"use strict"
/*
 * A entry point server
 *
 */

// ## Dependencies
import { Application }     from "https://deno.land/x/oak/mod.ts"

// ## Buildin dependencies
import router              from "./routes.ts"

// ##################################################################
// ## Variable declaration
const port = Deno.env.get("PORT") || 8080
const app  = new Application()


// ##################################################################
app.use(router.routes())
app.use(router.allowedMethods())


// ##################################################################
console.log (`Server runnig on port ${port}`)

await app.listen ({ port: +port })

