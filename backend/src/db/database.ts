import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Caminho do banco
const dbPath = path.resolve(__dirname, "../../livros.db");

// Verifica se o arquivo do banco já existe
const dbExists = fs.existsSync(dbPath);

// Cria ou abre o banco
const db = new Database(dbPath);

// Se o banco ainda não existia, executa o schema
if (!dbExists) {
  const schemaPath = path.resolve(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf-8");
  db.exec(schema);
  console.log("🛠️ Banco criado a partir do schema.sql");
}

export default db;
