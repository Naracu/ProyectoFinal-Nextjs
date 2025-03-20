"use client"
import PageTitle from "@/components/PageTitle"
import { AuthContext } from "@/Providers/authProvider"
import { useState, useContext, useEffect } from "react" 
import { useRouter } from "next/navigation" 
import Button from "@/components/Button"
import { createNewProduct } from "@/actions/createnewProduct"


function Adminpage ()  {

   const [nombreProducto, setNombreProducto] = useState("")
   const [detalle, setDetalle] = useState("")
   const {loggedIn,} = useContext(AuthContext)    
   const router = useRouter()
    
   const metodos = {
    "nombreProducto":setNombreProducto,
    "detalle":setDetalle,


   }
    
   
   
   
   useEffect (() => {
        if (!loggedIn) {
                router.push("/login")
        }
    
    }, [loggedIn])

        const handleSumbit = (e) => {
            e.preventDefault()
            createNewProduct(nombreProducto, detalle)
        }

        const handleChange = (e) => {
            const valor = e.target.value
            const name = e.target.name 
            metodos[name](valor)


        }

    return (
        <>
            <PageTitle>Admin Panel </PageTitle> 
            <section className="p-6 dark:bg-secondary dark:text-white">
	<form noValidate="" action="" className="flex flex-col mx-auto space-y-12 w-full" onSubmit={handleSumbit}>
		<fieldset className="grid grid-cols-4 gap-6  dark:bg-secondary">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Carga de producto</p>
				<p className="text-xs">Puedes cargar productos a la base de datos desde aca</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="nombreProducto" className="text-sm">Nombre del producto</label>
					<input name= "nombreProducto" id="nombreProducto" type="text" placeholder=" Ingrese el nombre del producto" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 bg-black" onChange={handleChange} />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="detalle" className="text-sm">Detalle</label>
					<input name= "detalle" id="detalle" type="text" placeholder=" Ingrese los detalles" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 bg-black" onChange={handleChange} />
				</div>
                <Button className="col-span-full sm:col-span3 bg-primary!">Cargar Producto</Button>
			</div>
		</fieldset>
	</form>
</section>
        </>
    )
}
export default Adminpage