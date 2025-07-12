// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//tabela 'livros' 
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS livros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      autor TEXT NOT NULL,
      data_publicacao TEXT NOT NULL,
      preco REAL,
      descricao TEXT
    )
  `);
});

module.exports = db;