import Footer from "@/components/Footer"
import Header from "@/components/Header";
import "./global.css";
import AuthContextProvider from "@/Providers/authProvider";
 
export const metadata = {
  title: "Mi Comercio Final",
  authors: [{ name: "Daniel Lopez" }],
  description: "mi proyecto final para next",
  keywords: "next js, tailwind, lucide, react, Daniel Lopez, Final"
}

function RootLayout ({children}) {
  return (
    <html lang="en">
      <body className="bg-backgound min-h-screen flex flex-col text-white">
        
        <AuthContextProvider>
        <Header/>
        <main className="grow p-4">
         {children}
         </main>
        <Footer/>
        </AuthContextProvider>

      </body>
    </html>
  );
}

export default RootLayout  