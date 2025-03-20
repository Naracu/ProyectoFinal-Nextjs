import PageTitle from "@/components/PageTitle";
import ProductsListContainer from "@/components/ProductsListContainer";
import ProductsLoader from "@/components/ProductsLoader";
import { Suspense } from "react";


export default async function ProductPage () {

    return (
        <>
            <PageTitle>Productos</PageTitle>
                       
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-4">
                <Suspense fallback={<ProductsLoader/> }>
                    <ProductsListContainer />
                </Suspense>
            </section>
        </>
    ); 
}

