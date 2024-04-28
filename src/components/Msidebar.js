'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Wdsidebar() {
    const pathName = usePathname();
    return (
        <>
            <div className="h-screen w-1/5 bg-white border-r-2 p-1 m-0">

                <Link href="/learn/mern/node">
                    <div className={pathName === "/learn/mern/node" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            NodeJS
                        </div>
                    </div>
                </Link>

                <Link href="/learn/mern/express" className="">
                    <div className={pathName === "/learn/mern/express" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            ExpressJS
                        </div>

                    </div>
                </Link>

                <Link href="/learn/mern/mongo" className="" >
                    <div className={pathName === "/learn/mern/mongo" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium">
                            MongoDb
                        </div>

                    </div>
                </Link>

                <Link href="/learn/mern/react" className="" >
                    <div className={pathName === "/learn/mern/react" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            React
                        </div>

                    </div>
                </Link>

                <Link href="/learn/mern/extra" className="" >
                    <div className={pathName === "/learn/mern/extra" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium ">
                            Extra
                        </div>

                    </div>
                </Link>
                <Link href="/learn/mern/projects" className="">
                    <div className={pathName === "/learn/mern/projects" ? "bg-violet-400 rounded m-2 h-8 transform: scale-105 duration-500 border-b-2 border-gray-500 hover:bg-violet-500" : "bg-blue-200 hover:bg-violet-300 transform: scale-100 duration-500 rounded m-2 h-8 border-b-2  border-gray-500"}>
                        <div className="mt-10 mx-10 text-xl text-gray-600 font-medium w-28">
                            Projects
                        </div>

                    </div>
                </Link>


            </div>
        </>
    );
}
