import wait from '@/lib/wait'
export default async function page() {
    await wait(1000)
    return (
        <div className='text-2xl p-8 border
         border-gray-200 rounded h-[360px] flex items-center justify-center'>
            Quiz
        </div>
    )

}
