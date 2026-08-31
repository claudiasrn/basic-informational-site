const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const server = http.createServer(async (req, res) => {
	const myUrl = new URL(req.url, "http://localhost:8080");

	if (myUrl.pathname === "/") {
		try {
			const data = await fs.readFile(
				path.join(__dirname, "index.html"),
				"utf-8",
			);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		} catch (err) {
			res.writeHead(500, { "Content-Type": "text/html" });
			res.end("Server error");
		}
	} else if (myUrl.pathname === "/about") {
		try {
			const data = await fs.readFile(
				path.join(__dirname, "about.html"),
				"utf-8",
			);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		} catch (err) {
			res.writeHead(500, { "Content-Type": "text/html" });
			res.end("Server error");
		}
	} else if (myUrl.pathname === "/contact-me") {
		try {
			const data = await fs.readFile(
				path.join(__dirname, "contact-me.html"),
				"utf-8",
			);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		} catch (err) {
			res.writeHead(500, { "Content-Type": "text/html" });
			res.end("Server error");
		}
	} else {
		try {
			const data = await fs.readFile(path.join(__dirname, "404.html"), "utf-8");
			res.writeHead(404, { "Content-Type": "text/html" });
			res.end(data);
		} catch (err) {
			res.writeHead(500, { "Content-Type": "text/html" });
			res.end("Server error");
		}
	}
});

server.listen(8080, () => {
	console.log("Server running on port 8080");
});
