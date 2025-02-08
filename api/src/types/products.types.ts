import { CATEGORY } from "./category.types";


export interface PRODUCTS_IMAGES{
    id: string;
    url: string;
    product_id: string
    product:PRODUCT
    created_at: Date;
    updated_at: Date
}

export interface PRODUCT{
    id: string;
    name: string;
    description: string;
    price: number;
    category_id:string;
    category?:CATEGORY;
    products_images?: PRODUCTS_IMAGES[]
    created_at: Date;
    updated_at: Date
}

export interface CreateProducts{
    name: string;
    description: string;
    price: number;
    category_id:string
}

