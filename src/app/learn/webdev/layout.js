import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Wdsidebar from "@/components/Wdsidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
    <div className="flex bg-gray-100">
        <Wdsidebar /> 
        {children}
        </div>
        
        </body>
    </html>
  );
}
