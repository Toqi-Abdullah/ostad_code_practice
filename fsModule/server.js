let fs= require ('fs');
let http= require('http');

let server= http.createServer(function(req,res){
     fs.readFile('JavaScript',function(error,data){
        if (error){
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('404 Not Found');
            res.end() }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
         } )


})


server.listen(3000);
console.log("run success");