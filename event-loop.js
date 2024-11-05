// const fs = require("node:fs") // denote nodejs's modules
const fs = require("fs") 
const crypto = require("crypto")

const value = 10

console.log("first line")

setTimeout(() => console.log("setTimeout"), 0)

process.nextTick(() => console.log("nextTick() 1 "))

const promise1 = new Promise((resolve, reject) => resolve("Promise1 resolved"))

promise1.then((data) => console.log(data))


fs.readFile("one.txt", "utf-8", () => {
    console.log("File reading complete")
    process.nextTick(() => console.log("nextTick 1 inside File Read"))
    setTimeout(() => console.log("setTimeout 2"), 0)
    setImmediate(() => console.log("setImmediate 2"))
    console.log("end line")
})

setImmediate(() => console.log("setImmediate"))

process.nextTick(() => console.log("nextTick() 2"))


function multiply(x, y) {
    return x * y
}

const result = multiply(value, 5)
console.log("result: ", result)
