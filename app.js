const http = require("http");

http.createServer((request, response)=>{

  response.end(`Hello, I'm your new friend! And I... ${process.env.HELLO_MESSAGE}`);
}).listen(process.env.PORT || 3000,  ()=> {console.log(`Port is ${process.env.PORT}`)});
