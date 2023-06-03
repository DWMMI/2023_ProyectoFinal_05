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

// Función para buscar y cargar el video según el término de búsqueda
function buscarTrailer() {
  const searchTerm = document.getElementById('search-input').value;
  // Realizar la búsqueda del trailer por nombre de película
  const videoId = buscarTrailerPorNombre(searchTerm);
  if (videoId) {
    for (let i = 0; i < players.length; i++) {
      cargarVideo(videoId, players[i]);
    }
  }
}

// Función para buscar el trailer por nombre de película
function buscarTrailerPorNombre(nombrePelicula) {
  const searchTerm = nombrePelicula + " trailer";
  // Utilizamos la API de búsqueda de YouTube para obtener los resultados
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
    searchTerm
  )}&type=video&key=AIzaSyAOG6z77ts3dkANZROcLmhFHQ6k9mHVi_w`; 
  // Realizamos la solicitud GET para obtener los resultados
  return fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      // Verificamos si se encontraron resultados
      if (data.items.length > 0) {
        return data.items[0].id.videoId; // Obtenemos el ID del primer video de los resultados
      } else {
        return null; // No se encontraron resultados
      }
    })
    .catch(error => {
      console.error('Error al buscar el trailer:', error);
      return null;
    });
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
