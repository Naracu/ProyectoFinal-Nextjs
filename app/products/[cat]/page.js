import { getProducts } from "@/actions/getProducts";
import PageTitle from "@/components/PageTitle";

export default async function ProductsByCategoryPage({ params}) {

    const { categoria } = await params;
    const { payload: products, error, message } = await getProducts ( categoria )
   
    console.log("Respuesta de getProducts:", { products, error, message }); // Depuración

       if(error) {
           return (
               <>
               <PageTitle>Error</PageTitle>
               <p>{message}</p>
               </>
    );
       }
    return (
        <div>page</div>
    )
}
