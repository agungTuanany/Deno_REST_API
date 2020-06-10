"use strict"
/*
 * Example using standart module library
 */

// ## Dependencies
import { dayOfYear, currentDayOfYear } from "https://deno.land/std/datetime/mod.ts"

// ## init
console.log (dayOfYear (new Date ("2020-02-02")))

console.log (currentDayOfYear ())
