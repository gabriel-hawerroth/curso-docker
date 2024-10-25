const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const createTableSql = `
    CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
`;

connection.query(createTableSql, (err) => {
  if (err) {
    console.error("Erro ao criar a tabela:", err);
    process.exit(1);
  }
});

const deleteSql = `
    DELETE FROM people;
`;

connection.query(deleteSql, (err) => {
  if (err) {
    console.error("Erro ao deletar os nomes existentes:", err);
    process.exit(1);
  }
});

const insertSql = `
    INSERT IGNORE INTO people(name)
    VALUES
        ('Gabriel Hawerroth'),
        ('Wesley Willians');
`;

connection.query(insertSql, (err) => {
  if (err) {
    console.error("Erro ao inserir nomes:", err);
    process.exit(1);
  }
});

app.get("/", (req, res) => {
  connection.query("SELECT name FROM people", (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar nomes no banco.");
      return;
    }

    const namesList = results.map((row) => `<li>${row.name}</li>`).join("");
    const html = `
            <h1>Full Cycle Rocks!</h1>
            <ul>${namesList}</ul>
        `;

    res.send(html);
  });
});

function closeConnection() {
  connection.end((err) => {
    if (err) {
      console.error("Erro ao fechar a conexão com o banco:", err);
    } else {
      console.log("Conexão com o banco encerrada.");
    }
    process.exit(0);
  });
}

process.on("SIGINT", closeConnection); // Intercepta Ctrl+C
process.on("SIGTERM", closeConnection); // Intercepta sinal de término

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
