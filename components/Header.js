import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import AuthLink from "./AuthLink"
import AdminLink from "./AdminLink"

const Header = () => {
    return (
        <header className= "px-2 py-4 flex justify-between items-center bg-primary text-white p-4">
            <h1>Mi Comercio</h1>
            <nav className="flex gap-4">
            <Link href="./">Home</Link>
            <AdminLink/>
            <Link href="./products">Productos</Link>
            <Link href="./carrito"><ShoppingCart/></Link>
            <AuthLink/>
            </nav>
        </header>
    )
}
export default Header