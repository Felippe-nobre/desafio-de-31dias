const jwt = require("jsonwebtoken");

const payload = {
  id: 123,
  username: "joao",
  role: "admin"
};

const secretKey = "minha_chave_secreta";

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Token JWT:", token);

const tokenRecebido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6ImpvYW8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzgxNjYyMDIsImV4cCI6MTczODE2OTgwMn0.to3vXYMkoqfS6RqW4vCud9h0PNU0ByxdmXd5mpj6yb8";
try {
  const dados = jwt.verify(tokenRecebido, secretKey);
  console.log("Token válido:", dados);
} catch (error) {
  console.error("Token inválido:", error.message);
}