const reqHand = (req,res) =>{
const method = req.method;
    const url = req.url;
    if (url ==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('html');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body<form action="action/create-user" method="POST"><input type ="text" name="username"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url == '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('html');
        res.write('<head><title>Assignment 1 part of users list</title></head>');
        res.write('<body><ul><li>User N° 1</li><li>User N° 2</li><li>User N° 3</li><li>User N° 4</li><li>User N° 5</li></ul></body>');
        res.write('</html>');
        return res.end();

    }
    if (url ==='/create-user'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        rq.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }

module.exports = {
    handler : reqHand,
    text : 'hello'
}
    // Must send a html response of "no page found"
};
server.listen(3000);