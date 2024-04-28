'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Wdsidebar() {
    const pathName=usePathname();
    return (
        <>
            <div className="h-screen w-1/5 bg-sky-100 p-1 m-0">

                
            <div className={pathName === "/learn/webdev/html" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500" : "bg-blue-200 transform: scale-100 duration-500 rounded m-2 h-8"}>
                    <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-14 border-gray-500">
                        <Link href="/learn/webdev/html">HTML</Link>
                    </div>
                </div>

                <div className={pathName === "/learn/webdev/css" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500" : "bg-blue-200 transform: scale-100 duration-500 rounded m-2 h-8"}>
                    <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-14 border-gray-500">
                        <Link href="/learn/webdev/css" className="">CSS</Link>
                    </div>
                    
                </div>

                <div className={pathName === "/learn/webdev/js" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500" : "bg-blue-200 transform: scale-100 duration-500 rounded m-2 h-8"}>
                    <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-28 border-gray-500">
                        <Link href="/learn/webdev/js" className="mx-1" >JavaScript</Link>
                    </div>
                    
                </div>

                <div className={pathName === "/learn/webdev/extra" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500" : "bg-blue-200 transform: scale-100 duration-500 rounded m-2 h-8"}>
                    <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-28 border-gray-500">
                        <Link href="/learn/webdev/extra" className="mx-1" >Extra</Link>
                    </div>
                    
                </div>


                <div className={pathName === "/learn/webdev/projects" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500" : "bg-blue-200 transform: scale-100 duration-500 rounded m-2 h-8"}>
                    <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-20 border-gray-500">
                        <Link href="/learn/webdev/projects" className="py-1">Projects</Link>
                    </div>
                    
                </div>


            </div>
        </>
    );
}
