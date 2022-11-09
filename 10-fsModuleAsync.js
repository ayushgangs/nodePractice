const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{ // these (err,result) fuctions are callbacks
    if(err)
    {
        console.log(err);
        return
    }
    const first = result
    
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        
        writeFile('./content/third.txt',
        `it is the final file after ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })

    })

}) 