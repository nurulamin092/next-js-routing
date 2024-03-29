import Link from "next/link";

export default function Folder1() {
    return (
        <div className="p-20 flex flex-col gap-2">
            <h1 className="text-2xl">
                Folder1
            </h1>
            <Link className="text-blue-400" href="/folder1/folder2">
                Folder2
            </Link>
        </div>
    )
}
