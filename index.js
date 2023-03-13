// the following "//" are the steps for setting up a simple server
// import your http
const http = require("http")

// create server with http
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

// initial port
const PORT = 4550;

// listern to server
// the only way for the "const" to be pulled as a variable, in the string, is using back ticks, on the "~" key
server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))