/*
	
*/



exports.web = {
	e400: (res)=> res.writeHead(400, {"Content-Type":"html/text"}).end("<p>400: Bad Request</p>"),
	e401: (res)=> res.writeHead(401, {"Content-Type":"html/text"}).end("<p>Unauthorized</p>"),
	e404: (res)=> res.writeHead(404, {"Content-Type":"html/text"}).end("<p>404: Not Found</p>"),
	e405: (res)=> res.writeHead(405, {"Content-Type":"html/text"}).end("<p>405: Method Not Allowed</p>"),
	e408: (res)=> res.writeHead(408, {"Content-Type":"html/text"}).end("<p>Request Timeout</p>"),
	e413: (res)=> res.writeHead(413, {"Content-Type":"html/text"}).end("<p>413: Payload Too Large</p>"),
	e414: (res)=> res.writeHead(414, {"Content-Type":"html/text"}).end("<p>414: URI Too Long</p>"),
	e415: (res)=> res.writeHead(415, {"Content-Type":"html/text"}).end("<p>Unsupported Media Type</p>"),
	e420: (res)=> res.writeHead(420, {"Content-Type":"html/text", "Set-Cookie":["id=deleted","t=deleted"]}).end("<p>Incorrect Cookie Count</p>"),
	e421: (res)=> res.writeHead(421, {"Content-Type":"html/text", "Set-Cookie":["id=deleted","t=deleted"]}).end("<p>Incorrect Cookie</p>"),
	e500: (res)=> res.writeHead(500, {"Content-Type":"html/text"}).end("<p>500: Internal Server Error</p>"),
}
exports.api = {
	e400: (res)=> res.writeHead(400, {}).end("Bad Request"),
	e401: (res)=> res.writeHead(401, {}).end("Unauthorized"),
	e404: (res)=> res.writeHead(404, {}).end("Not Found"),
	e405: (res)=> res.writeHead(405, {}).end("Method Not Allowed"),
	e408: (res)=> res.writeHead(408, {}).end("Request Timeout"),
	e413: (res)=> res.writeHead(413, {}).end("Payload Too Large"),
	e414: (res)=> res.writeHead(414, {}).end("URI Too Long"),
	e415: (res)=> res.writeHead(415, {}).end("Unsupported Media Type"),
	e420: (res)=> res.writeHead(420, {"Set-Cookie":["id=deleted","t=deleted"]}).end("Incorrect Cookie Count"),
	e421: (res)=> res.writeHead(421, {"Set-Cookie":["id=deleted","t=deleted"]}).end("Incorrect Cookie"),
	e500: (res)=> res.writeHead(500, {}).end("Internal Server Error"),
}
exports.ue = {
	e2: (res)=> res.writeHead(2, {}).end("Bad Request"),
	e1: (res)=> res.writeHead(1, {}).end("Unauthorized"),
	e4: (res)=> res.writeHead(4, {}).end("Not Found"),
	e5: (res)=> res.writeHead(5, {}).end("Method Not Allowed"),
	e8: (res)=> res.writeHead(8, {}).end("Request Timeout"),
	e3: (res)=> res.writeHead(3, {}).end("Payload Too Large"),
	e6: (res)=> res.writeHead(6, {}).end("URI Too Long"),
	//e415: (res)=> res.writeHead(415, {}).end("Unsupported Media Type"),
	e9: (res)=> res.writeHead(9, {"Set-Cookie":["id=deleted","t=deleted"]}).end("Incorrect Cookie Count"),
	e10: (res)=> res.writeHead(10, {"Set-Cookie":["id=deleted","t=deleted"]}).end("Incorrect Cookie"),
	e7: (res)=> res.writeHead(7, {}).end("Internal Server Error"),
}

