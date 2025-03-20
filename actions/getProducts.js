export async function getProducts(categoria) {

    try {
        console.log("categoria enviada" ,categoria)
         const url = categoria 
             ? "http://localhost:3000/api/products?categoria=" + categoria 
             : "http://localhost:3000/api/products"
        const data = await fetch(url)
    
        const { payload:products } = await data.json()
    
    
        return {
            payload: products, 
            message: "Productos obtenidos correctamente",
            error: false,
        }

    } catch (error) {


        return {
        payload: null,
        message: "Error obteniendo productos",
        error: true,
        }
    }
} 

export default getProducts