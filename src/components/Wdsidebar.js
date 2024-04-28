'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Wdsidebar() {
    const pathName = usePathname();
    return (
        <>
            <div className="h-screen w-1/5 bg-white border-r-2 p-1 m-0">

                <Link href="/learn/webdev/html">
                    <div className={pathName === "/learn/webdev/html" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            HTML
                        </div>
                    </div>
                </Link>

                <Link href="/learn/webdev/css" className="">
                    <div className={pathName === "/learn/webdev/css" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            CSS
                        </div>

                    </div>
                </Link>

                <Link href="/learn/webdev/js" className="" >
                    <div className={pathName === "/learn/webdev/js" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium">
                            JavaScript
                        </div>

                    </div>
                </Link>

                <Link href="/learn/webdev/extra" className="" >
                    <div className={pathName === "/learn/webdev/extra" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className=" mx-10 text-xl text-gray-600 font-medium ">
                            Extra
                        </div>

                    </div>
                </Link>

                <Link href="/learn/webdev/projects" className="">
                    <div className={pathName === "/learn/webdev/projects" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className=" mx-10 text-xl text-gray-600 font-medium w-28">
                            Projects
                        </div>

                    </div>
                </Link>


            </div>
        </>
    );
}
