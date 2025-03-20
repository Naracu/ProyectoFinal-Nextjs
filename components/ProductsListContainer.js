import { getProducts } from "@/actions/getProducts";
import ProductList from "./ProductList";
import PageTitle from "./PageTitle";

    async function ProductListContainer () {

    const { payload: products, error, message } = await getProducts ()

    if(error) {
        return (
            <>
            <PageTitle>Error</PageTitle>
            <p>{message}</p>
        </>
        )
    }

    return (
        <ProductList productos={products} />
    )
}

export default ProductListContainer