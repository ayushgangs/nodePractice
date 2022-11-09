const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.write("this is homepage")   //sending response to user
//     // res.end()                    //end response
    
    
// })

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("this is homepage")    //we can directly send response with res.end() also
    }
    if(req.url=='/about'){
        res.end("our history")
    }
    
    res.end(                //we can add html also directly using template literals ``
    `
        <h1>OOPS!</h1>
        <p>not available</p>
        <a href='/'>back to homepage</a>
    `
    )
    
})

server.listen(5000)
