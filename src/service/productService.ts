import { products, ProductResponse } from "@/types/product";


const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<products[]>{

    const response = await fetch(BASE_URL);
    
    if (!response.ok){
        throw new Error("failed to fetch error");
    }

    const data: ProductResponse = await response.json();
    return data.products
}

export async function getProductById(id : string): Promise<products>{

    const response = await fetch(`${BASE_URL}/${id}`)

    if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

    return response.json();
}