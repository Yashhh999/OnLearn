import Link from "next/link";

export default function Footer() {
    return(
        <>
        <div className="justify-center flex bg-transparent">
            <Link href="https://github.com/Yashhh999/OnLearn/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6zsN2YozOB9s5jPjbwO0Y52x8tNWrpGwaluKFPq_sA&s" className="h-12 rounded-full" alt="github" />
            </Link>
        </div>
        </>
    )
}