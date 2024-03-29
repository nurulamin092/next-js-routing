export default async function wait(millisecond) {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved()
        }, millisecond)
    })
}