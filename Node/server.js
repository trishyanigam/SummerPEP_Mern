const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET')
    {
        res.end("Home Page");
    }
    else if(req.url==='/login')
    {
        res.end('Login Page');
    }
    else if(req.url==='/' && req.method==='POST')
    {
        res.end('Response for post request');
    }
    else
    {
        res.end("Page not Found");
    };
});

server.listen(3000,()=>{
    console.log('Server running');
});