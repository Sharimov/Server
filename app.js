var fs = require('fs');
//подключение к локалке
var http = require('http');

var server = http.createServer(function(req, res){
    console.log("URL страницы " + req.url);

    if(req.url === '/index' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadShort.pipe(res);
    } else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        var myReadShort = fs.createReadStream(__dirname + '/about.html', 'utf8');
        myReadShort.pipe(res);
    }else if(req.url == '/style.css'){
        fs.readFile('style.css', function(err, info){
            res.end(info);
        })
    } else if(req.url == '/script.js'){
        fs.readFile('script.js',function (err,info) {
            res.end(info);
        });
    } else if(req.url.endsWith('.jpg')){
        var imgFile = req.url.slice(1);
        fs.readFile(imgFile,function (err,info) {
            res.end(info);
        });
    }else if(req.url === '/img/gallery/.jpg'){
        var imgFile = req.url.slice(1);
        fs.readFile(imgFile,function (err,info) {
            res.end(info);
        });
    }else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        var myReadShort = fs.createReadStream(__dirname + '/error.html', 'utf8');
        myReadShort.pipe(res);
    }
});

server.listen(3000, 'localhost');
console.log("Мы отслеживаем порт 3000");