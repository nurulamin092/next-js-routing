import wait from '@/lib/wait'
import React from 'react'

export default async function AssignmentsPage() {
    await wait(3000)
    return (

        <div
            className='text-2xl p-4 border border-gray-200 rounded
        h-[360px] flex items-center justify-center'
        >
            Assignments
        </div>
    )
}
