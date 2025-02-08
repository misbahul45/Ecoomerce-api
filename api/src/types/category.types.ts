import { PRODUCT } from "./products.types"

export interface CATEGORY{
    id: string,
    name: string
    product?:PRODUCT
    updated_at: Date
    created_at: Date
}