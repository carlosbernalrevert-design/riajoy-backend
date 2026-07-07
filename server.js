const express = require('express');
const path = require('path');

const construirPrompt = require('./utils/construirPrompt');
const detectarPolitica = require('./utils/detectarPolitica');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint de prueba
app.get('/ping', (req, res) => {
  res.send('rIAjoy está vivo, o no, pero responde.');
});

// Endpoint principal
app.post('/convert', async (req, res) => {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Falta el texto limpio de la noticia." });
  }

  // 1. Detectar si es política
  if (detectarPolitica(texto)) {
    return res.json({
      resultado: "Mire usted, yo de fútbol hablo encantado, y si me apuran, también de ciclismo. Pero de otras cosas no, que para eso ya hay gente muy preparada."
    });
  }

  // 2. Construir prompt
  const prompt = construirPrompt(texto);

  // 3. Aquí luego añadiremos la llamada a la IA
  return res.json({
    resultado: "Aquí iría la columna rIAjoizada generada por la IA. ¡viva el vino!"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rIAjoy escuchando en http://localhost:${PORT}`);
});
