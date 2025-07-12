import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

//caminho do arquivo no bd
const dbPath = path.resolve(__dirname, "livros.db");
const db = new Database(dbPath);

// Executar schema.sql na primeira execução
const schemaPath = path.resolve(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf-8");
db.exec(schema);

export default db;
