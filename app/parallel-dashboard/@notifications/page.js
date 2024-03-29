import wait from '@/lib/wait'
import React from 'react'

export default async function NotificationsPage() {
    await wait(2000)
    throw new Error("an error occurred...")
    return (
        <div className='text-xl p-4 
        row-span-2 border border-gray-200 rounded
        h-[745px] flex items-center justify-center'>
            Notifications
        </div>
    )
}
