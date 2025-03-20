import { addDoc, collection} from "firebase/firestore";
import { db } from "../firebase";
import { productos } from "@/assets/products";

export async function migrateProducts() {
   
    
    const productsCollection = collection(db, "products");
    
    productos.forEach((product)=>{
        addDoc(productsCollection, product)
        .then (()=> {
            console.log("Producto agregado correctamente", product.id)
        })
    })
}