import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OnLearn",
  description: "OnLearn",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        
        {children}</body>
        <Footer/>
    </html>
    </ClerkProvider>
  );
}
