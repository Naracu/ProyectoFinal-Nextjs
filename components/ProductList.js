import Image from "next/image";
import Link from "next/link";
function ProductList ({productos}) { 
        return (
        
        <>
                        {productos.map ((producto) =>{
            return(
                <article className="p-2 group shadow-md rounded-md relative aspect-[1/1.25] overflow-hidden bg-accent" key={producto.id}>
                    <Image 
                        src={producto.thumbnail || "https://placehold.co/600x400?text=No+Image"} 
                        alt={`Thumbnail de ${producto.title}`} 
                        fill
                        className="group-hover:scale-125 transition-all"
                    />
                    <div className="z-10 absolute bottom-0 bg-secondary/50 backdrop-blur-xl left-0 w-full p-2">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-l max-w-[200px] truncate">{producto.title}</h2>
                            <p>$ {producto.price}</p>
                        </div>
                    <Link href={`./product/${producto.id}`}>ver mas</Link>
                    </div>
                </article>
            )
        })}
        </>
    )
}

export default ProductList