const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  // Asegúrate de tener esta línea

const app = express();
const PORT = 3000;

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('./exam.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

// Middleware para parsear el cuerpo de las solicitudes y permitir CORS
app.use(express.json());
app.use(cors());  // Asegúrate de tener esta línea

// Ruta para guardar el resultado del examen
app.post('/save-result', (req, res) => {
    const { user, score } = req.body;
    const sql = 'INSERT INTO results (user, score) VALUES (?, ?)';
    db.run(sql, [user, score], function(err) {
        if (err) {
            return console.error(err.message);
        }
        res.json({ message: 'Resultado guardado', id: this.lastID });
    });
});

// Ruta para obtener el resultado del examen de un usuario
app.get('/get-result/:user', (req, res) => {
    const user = req.params.user;
    const sql = 'SELECT * FROM results WHERE user = ?';
    db.get(sql, [user], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(row);
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Crea la tabla de resultados si no existe
db.run(`CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT,
    score INTEGER
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
});
