import Link from "next/link"

export default function Nav({ text, link }) {
    return (
        <Link href={link}>
            <button className="rounded-xl bg-blue-800 py-2 px-3 mr-3 h-12 w-20 text-white">
                {text}
            </button>
        </Link>
    )
}
