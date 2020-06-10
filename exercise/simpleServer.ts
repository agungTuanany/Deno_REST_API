"use strict"

/*
 * Deno simple server
 *
 */

// ## Dependencies
import { serve } from "https://deno.land/std/http/server.ts"

// ## Variable declaration
const s = serve ({ port: 8000 })

console.log ("http://localhost:8000/")

// ## init
for await (const req of s) {
    req.respond({  body: "Hello World\n" })
}
