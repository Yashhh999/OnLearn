import Link from "next/link";

export default function Wdsidebar() {
    return (
        <div className="h-screen w-1/5 bg-sky-100 p-1 m-0">


            <div className="bg-blue-200 rounded m-2">
            <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-14 border-gray-500">
                <Link href="/">HTML</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">HTML One Shot</Link>
            </div>
            </div>

            <div className="bg-blue-200 rounded m-2">
            <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-14 border-gray-500">
                <Link href="/" className="">CSS</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">CSS One Shot</Link>
            </div>
            </div>

            <div className="bg-blue-200 rounded m-2">
            <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-28 border-gray-500">
                <Link href="/" className="mx-1" >JavaScript</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">JS Part 1</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">JS Part 2</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">JS Part 3</Link>
            </div>
            </div>


            <div className="bg-blue-200 rounded m-2">
            <div className="mt-10 mx-10 text-xl text-gray-500 font-medium border-b-2 w-20 border-gray-500">
                <Link href="/" className="">Projects</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">Project 1</Link>
            </div>
            <div className="my-2 mx-14 bg-blue-300 w-40 rounded">
                <Link href="/" className="m-1">Project 2</Link>
            </div>
            </div>


        </div>
    );
}
