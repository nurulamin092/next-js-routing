import Link from "next/link";

export default function NotificationsPage() {
    return (
        <div className='text-xl p-4 
    row-span-2 border border-gray-200 rounded
    h-[745px] flex gap-5 items-center justify-center'>
            <span>All Notifications</span>
            <div>
                <Link className="text-blue-400" href="/parallel-dashboard/seen">SEEN</Link>
            </div>
        </div>
    )
}
