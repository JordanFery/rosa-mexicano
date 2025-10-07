import Link from "next/link"

export default function Nav({ text, link }) {
    return (
        <Link href={link}>
            <button className="border-b-2 border-zinc-300 hover:border-blue-800 hover:border-b-4 hover:text-blue-800 hover:font-bold text-black py-2 px-3 mr-3 h-12 w-20">
                {text}
            </button>
        </Link>
    )
}
