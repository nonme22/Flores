var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene solo el título de la canción
var lyricsData = [
  { text: "Starry Eyes - The Weeknd", time: 0 },
];

// Mostrar el título de la canción permanentemente
function updateLyrics() {
  lyrics.style.opacity = 1; // Mantener opacidad completa
  lyrics.innerHTML = lyricsData[0].text; // Mostrar solo el título
}

// Ejecutar la función una vez al cargar
updateLyrics();