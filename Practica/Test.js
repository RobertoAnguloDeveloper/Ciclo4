const math = require("./Math.js") // Module exported from a file
const os = require("os") // Module from NodeJS System 
const fs = require("fs"); // Module exported from a file

console.log(math.add(2,3))

console.log(os.platform())
console.log(os.release())
console.log(os.freemem(),"Bytes")
console.log(os.totalmem(),"Bytes")

text = "Your operative System is : " + os.platform() + " version " + os.release()
    + "\nYour memory free is : " + os.freemem()
    + "\nYour total memory is : " + os.totalmem()

fs.writeFile("TestFile.txt", text, (er)=>{
    if (er) {
        console.log(er)
    }else {
        console.log("FILE CREATED")
    }
})

