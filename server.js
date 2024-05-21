const http = require('node:http')

http.createServer((req,res)=> {
    console.log('request entered on:', new Date(Date.now()).toISOString())
    res.end('server responding ok')
})
.listen(3000, 'localhost', ()=>{console.log('server started at http://localhost:3000')})