import Link from "next/link";

export default function Folder4() {
    return (
        <div className="p-20 flex flex-col gap-2">
            <h1 className="text-2xl">
                Folder4
            </h1>
            <Link className="text-blue-400" href="/folder1/folder3">
                Folder3
            </Link>

            <Link className="text-green-400" href="/contact">
                Contact
            </Link>

        </div>
    )
}
