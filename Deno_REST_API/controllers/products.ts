"use strict"
/*
 * Methods for Products
 */

// ## Dependencies
import { Client }  from "https://deno.land/x/postgres/mod.ts"
import { v4 }      from "https://deno.land/std/uuid/mod.ts"

// ## Buildin dependencies
import { Product } from "../types.ts"
import { dbCreds } from "../config.ts"


// ## Init client
const client = new Client(dbCreds)

let products: Product[] = [
    {
        id              : '1',
        name            : "Product One",
        description     : "This is product one",
        price           : 19.99,
    },
    {
        id              : '2',
        name            : "Product Two",
        description     : "This is product two",
        price           : 19.99,
    },
    {
        id              : '3',
        name            : "Product Three",
        description     : "This is product three",
        price           : 19.99,
    }
]

/*
 * API methods
 *
 */

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = async ({ response }: { response: any }) => {
    try{
        await client.connect()

        const result   = await client.query("SELECT * FROM products")
        const products = new Array()

        result.rows.map(p => {
            let obj: any = new Object()

            result.rowDescription.columns.map((el, i) => {
                obj[el.name] = p[i]
            })
            products.push(obj)
        })

        response.body = {
            success : true,
            data    : products
        }
    }
    catch (err) {
        response.status = 500
        response.body   = {
            success : true,
            mesg    : err.toString()
        }
    }
    finally {
        await client.end()
    }
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
    const product: Product | undefined = products.find(p => p.id === params.id)

    if (!product) {
        response.status = 404
        response.body   = {
            success : false,
            msg     : "No product found"
        }
    }
    else {
        response.status = 200
        response.body   = {
            success : true,
            data    : product
        }
    }
}

// @desc    Add product
// @route   POST /api/v1/products
const addProduct = async ({ request, response }: { request: any, response: any }) => {
    const body   = await request.body()
    const product = body.value

    if (!request.hasBody) {
        response.status = 404
        response.body   = {
            success : false,
            msg     : "No data"
        }
    }
    else {
        try {
            await client.connect()

            const result = await client.query("INSERT INTO products(name, description, price)VALUES($1,$2,$3)",
            product.name,
            product.description,
            product.price)

            response.status = 201
            response.body   = {
                success : true,
                data    : product
            }
        }
        catch (err) {
            response      = 500
            response.body = {
                success : false,
                msg     : err.toString()
            }

        }
        finally {
            await client.end()
        }

    }
}

// @desc    Update product
// @route   PUT /api/v1/products
const updateProduct = async ({ params, request, response }: {params: { id: string }, request: any, response: any }) => {
    const product: Product | undefined = products.find(p => p.id === params.id)

    if (!product) {
        response.status = 404
        response.body   = {
            success : false,
            msg     : "No product found"
        }
    }
    else {
        const body = await request.body()
        const updateData: { name?: string; description?: string, price?: number } = body.value

        products = products.map(p => p.id === params.id ? { ...p, ...updateData } : p)

        response.status = 200
        response.body   = {
            success : true,
            data    : products
        }
    }

}

// @desc    Delete product
// @route   DELETE /api/v1/products
const deleteProduct = ({params, response }: { params: { id: string }, response: any }) => {
    products = products.filter(p => p.id !== params.id)

    response.body = {
        sucess  : true,
        msg     : "Product removed"
    }

}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct }
