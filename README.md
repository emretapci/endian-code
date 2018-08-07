Copyright (c) 2018 Emre Tapci.

# endian-code
NodeJS module for encoding and decoding numbers of given size in big and little endian.

# install
npm install --save endian-code

# API
const endianCode = require('endian-code');

/*encode() params:
    n: number to be encoded
    size: number's size in bytes
	bigEndian: true for big endian, false for little endian
*/
console.log(endianCode.encode(0x1234, 2, true)); //outputs [18, 52]
console.log(endianCode.encode(0x1234, 4, true)); //outputs [0, 0, 18, 52]
console.log(endianCode.encode(0x1234, 8, true)); //outputs [0, 0, 0, 0, 0, 0, 18, 52]

console.log(endianCode.encode(0x1234, 2, false)); //outputs [18, 52]
console.log(endianCode.encode(0x1234, 4, false)); //outputs [52, 18, 0, 0]
console.log(endianCode.encode(0x1234, 8, false)); //outputs [52, 18, 0, 0, 0, 0, 0, 0]

/*decode() params:
    array: array to be decoded
    size: number's size in bytes
	bigEndian: true for big endian, false for little endian
*/
console.log(endianCode.decode([0x12, 0x34], 2, true).toString(16)); //outputs 1234
console.log(endianCode.encode([0x12, 0x34], 4, true).toString(16)); //outputs 12340000
console.log(endianCode.encode([0x12, 0x34], 8, true).toString(16)); //outputs 1234000000000000

console.log(endianCode.decode([0x34, 0x12], 2, false).toString(16)); //outputs 1234
console.log(endianCode.encode([0x34, 0x12], 4, false).toString(16)); //outputs 12340000
console.log(endianCode.encode([0x34, 0x12], 8, false).toString(16)); //outputs 1234000000000000
