const http = require('http');
const  data  = require('./data');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data))
    res.end();
}).listen(5000);


const fs = require('fs');
const path = require('path');
const dirPath  = path.join(__dirname,'files');
console.log(dirPath);

//fs.writeFileSync('creatng.js','This is a sting data','binary')

for (let index = 0; index < 5; index++) {
   fs.writeFileSync(`${dirPath}/file${index}.txt`,'asdjasdhahsd')
    
}