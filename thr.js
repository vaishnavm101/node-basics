const crypto = require("crypto")

const start = new Date()

// console.log(process.env.UV_THREADPOOL_SIZE)
// To set new thread pool size from cmd: set UV_THREADPOOL_SIZE=8 && node thr.js

console.log("1st line")
crypto.pbkdf2("password", "salt", 200000, 500, "sha512", ()=>{
    console.log(`password 1 hashed in ${Date.now() - start}ms`)
})

crypto.pbkdf2("password", "salt", 200000, 500, "sha512", ()=>{
    console.log(`password 2 hashed in ${Date.now() - start}ms`)
})

crypto.pbkdf2("password", "salt", 200000, 500, "sha512", ()=>{
    console.log(`password 3 hashed in ${Date.now() - start}ms`)
})

crypto.pbkdf2("password", "salt", 200000, 500, "sha512", ()=>{
console.log(`password 4 hashed in ${Date.now() - start}ms`)
})

crypto.pbkdf2("password", "salt", 200000, 500, "sha512", ()=>{
    console.log(`password 5 hashed in ${Date.now() - start}ms`)
})
console.log("last line")
