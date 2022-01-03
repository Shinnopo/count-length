export default function len(arg: string | object) {
    if (typeof arg === "string") {
        return arg.length
    } else {
        return Object.keys(arg).length
    }
}