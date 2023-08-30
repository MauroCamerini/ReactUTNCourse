const mercadoLibreURL = "https://api.mercadolibre.com"

export async function searchProducts(query) {
    const response = await fetch(mercadoLibreURL+"/sites/MLA/search?q="+query).then(res=>res.json())

    if(response.error)
        throw new Error(response.error)
    
    return response
}


export async function getProductById(id) {
    const product = await fetch(mercadoLibreURL+"/items/"+id).then(res => res.json())
    if(product.error)
        throw new Error(product.error)
    
    return product
}
