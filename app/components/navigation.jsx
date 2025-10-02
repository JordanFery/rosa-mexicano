import Link from "next/link"

export default function Nav({ text, link }) {
    return (
        <Link href={link}>
            <button className="rounded-full bg-blue-800 py-2 px-4 mr-4 w-40 text-white">
                {text}
            </button>
        </Link>
    )
}
