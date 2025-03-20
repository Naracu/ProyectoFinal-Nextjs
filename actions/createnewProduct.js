export const createNewProduct = async (nombreProducto, detalle) => {
try {

        const producto = {
            name: nombreProducto,
            detail: detalle,
            category: "beauty"
        }

        const response = await fetch ("http://localhost:3000/api/products",{
            method: "POST",
            headers: {"Content-Type": "application/json"

            },
            body: JSON.stringify(producto)

        })

} catch (error) {
    return {
        message: "error al crear el producto",
        error: true,
        payload:null

    }
}

} 