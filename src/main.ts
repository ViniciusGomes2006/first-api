import http from "http";

const users: any = [];

const server = http.createServer((req,res) => {
	const {method, url} = req;

	if (method === "GET" && url === "/users") {
		return res
			.setHeader("Content-type", "application/json")
			.end(`lista de usuários: ${JSON.stringify(users)}`);
	}
	
	if (method === "POST" && url === "/users") {

		users.push({
			id: 1,
			name: "Vinicius",
			last_name: "Gomes"
		});
	
		return res.end("Criação de usuário.");
	}

	return res.end("Hello World");
});

server.listen(2707);