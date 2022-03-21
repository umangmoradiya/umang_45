const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>login success</h1>") : res.write("<h1>loginc fail</h1>");
    res.end();

});
server.listen(6060, () => {
    console.log("server.listening the port no. 6060");
});
