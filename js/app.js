import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve from project root (demo.html is in project root)
const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'demo.html'));
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/demo.html`);
});
