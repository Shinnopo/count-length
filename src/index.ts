export function len(arg: string | object) {
    if (typeof arg === "string") {
        return arg.length
    } else if(typeof arg === "object") {
        return Object.keys(arg).length
    } else {
        return `This argument type is ${typeof arg}. The argument must be of type number of object.`
    }
}