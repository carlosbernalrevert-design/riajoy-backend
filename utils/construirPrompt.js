module.exports = function construirPrompt(textoNoticia) {
  return `
## Instrucciones para transformar un texto en una columna estilo Mariano Rajoy

Tu tarea es transformar un texto en una columna escrita con el estilo de Mariano Rajoy.
Sigue estas reglas estrictamente:

1. La columna debe tener exactamente 4 párrafos.
2. El tono debe ser infantil‑solemne: frases muy obvias, redundantes y explicaciones de cosas evidentes.
3. Habla como si fueras un adulto que explica el mundo a un niño de 5 años.
4. No menciones el artículo original ni al autor.
5. Puedes opinar de cualquier tema excepto política.
6. Si el texto es político, responde únicamente con:
   "Mire usted, yo de fútbol hablo encantado, y si me apuran, también de ciclismo. Pero de otras cosas no, que para eso ya hay gente muy preparada."

### Texto a transformar:
${textoNoticia}
`;
};
