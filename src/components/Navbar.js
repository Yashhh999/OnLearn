import Link from "next/link"


export default function Navbar() {
    return(
        <>
        <div className="bg-indigo-950 h-16">
        <div className="flex justify-between mx-24  ">
            <h1 className="text-3xl text-orange-100 font-semibold mt-4">O L</h1>
            <Link href="/signup" className="mt-4 text-2xl font-medium text-black bg-white p-1 rounded-md hover:bg-violet-600 hover:text-orange-100 transition duration-500 ease-in-out transform hover:scale-110">Sign Up</Link>
        </div>
        </div>
        </>
    )
}