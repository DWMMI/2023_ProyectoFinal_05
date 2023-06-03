// Variables globales
let players = [];

// Función para inicializar los reproductores de YouTube
function onYouTubeIframeAPIReady() {
  players.push(new YT.Player('player1', {
    height: '100%',
    width: '100%',
    videoId: 'FSyWAxUg3Go', // ID del Trailer
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      fs: 1,
      playsinline: 1
    }
  }));

  players.push(new YT.Player('player2', {
    height: '100%',
    width: '100%',
    videoId: 'vsJgLu3PIno', // ID del Trailer
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      fs: 1,
      playsinline: 1
    }
  }));

  players.push(new YT.Player('player3', {
    height: '100%',
    width: '100%',
    videoId: 'OyWBqbgk980', // ID del Trailer
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      fs: 1,
      playsinline: 1
    }
  }));
}

// Función para cargar y reproducir el video
function cargarVideo(videoId, player) {
  player.loadVideoById(videoId);
}

function buscarTrailer() {
    const searchTerm = document.getElementById('search-input').value;
    const searchQuery = searchTerm + " trailer";
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    
    // Abrir la URL en una nueva pestaña del navegador
    window.open(searchUrl, '_blank');
  }
  


// Evento para mostrar/ocultar el campo de búsqueda al hacer clic en el botón de búsqueda
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', function() {
  const searchPanel = document.querySelector('.search-panel');
  searchPanel.classList.toggle('active');
  searchInput.focus();
});

// Evento para buscar al presionar Enter en el campo de búsqueda
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    buscarTrailer();
  }
});

// Evento para cargar los trailers iniciales al hacer clic en el botón de inicio
const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function() {
  cargarVideo('FSyWAxUg3Go', players[0]);
  cargarVideo('vsJgLu3PIno', players[1]);
  cargarVideo('OyWBqbgk980', players[2]);
});
