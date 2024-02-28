import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech hub with Lynnie ",
  description: "For the development of reliable websites and sharing of information",
};

export default function RootLayout({
   children }) {
  return (
    <html lang="en">
   
    <body className="flex flex-col justify-between w-10/12 m-auto h-screen">
     <Navbar />

    {children}

  
    <Footer /> 
    </body>
       
    </html>
  );
}
