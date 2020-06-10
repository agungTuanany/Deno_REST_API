"use strict"
/*
 * Testing Deno using TextEncoder to write some file
 */

// ## Variable declaration
const encoder = new TextEncoder ()
let name = "Deno"

const greetText = encoder.encode(`Hello World \n My name is ${name} \n`)

// ## init
await Deno.writeFile("greet.txt", greetText)
