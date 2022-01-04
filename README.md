# count-length

count-length is a module that returns the length of a JavaScript string, array, or object.

~~~JavaScript
import { len } from "count-length"

console.log(len("test")) // 4
console.log(len([1,2,3,4])) // 4
console.log(len({id: 1, name: "john"})) // 2
console.log(len([1,2],[3,4])) // 2
console.log(len(123)) // This argument type is number. The argument must be of type number of object.
~~~

## Installation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:

    $ npm install count-length

Depending on your environment, you may need to add the following to package.json

~~~JSON
{
    "type": "module"
}
~~~

## Features

- Can measure length regardless of type
- No need to switch property depending on the type

## License
[MIT](https://github.com/Shinnopo/count-length/blob/main/LICENSE)
