import {  NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, getDocs, where, query, addDoc} from "firebase/firestore";

export async function GET (request) {

  const searchParams = request.nextUrl.searchParams;
  const categoria = searchParams.get("categoria")
  const productsCollection = collection(db, "products");
  
  try {
    const filtro = query(productsCollection, where("category", "==", categoria)); 
    const snapshot = await getDocs(categoria ? filtro : productsCollection);
   
    const productosFinales = snapshot.docs.map((documentRef) => { 
      const productoData = documentRef.data();
      return productoData;
    })


    return NextResponse.json({
      message: "Productos obtenidos correctamente",
      error: false,
      payload: productosFinales,
    });
  } catch (error) {
    console.error("Error en /api/products:", error);
    return NextResponse.json({
      message: "Error obteniendo productos",
      error: true,
      payload: null, 
    });
  }
}

export async function POST (req) {

const producto = await req.json()

try{

const productsCollection = collection (db, "products")
await addDoc(productsCollection, {...producto})

  return NextResponse.json({
    message: "Producto creado correctamente",
    error: false,
    payload: null,
  });



} catch (error) {
  console.log (error)
  return NextResponse.json({
    message: "Error al crear producto",
    error: true,
    payload: null
  })
}
}