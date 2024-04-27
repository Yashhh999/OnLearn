import Link from "next/link"


export default function Navbar() {
    return(
        <>
        <div className="bg-indigo-950 h-16">
        <div className="flex justify-center mx-24 ">
            <Link href="/" className="text-3xl text-orange-100 font-semibold mt-4 justify-center" >O L</Link>
        </div>
        </div>
        </>
    )
}