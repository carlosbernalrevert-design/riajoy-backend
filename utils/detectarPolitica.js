module.exports = function detectarPolitica(texto) {
  const palabrasClave = [
    "elecciones", "gobierno", "ministro", "presidente",
    "partido", "congreso", "parlamento", "campaña",
    "voto", "coalición", "senado", "diputado"
  ];

  const textoLower = texto.toLowerCase();

  return palabrasClave.some(p => textoLower.includes(p));
};
