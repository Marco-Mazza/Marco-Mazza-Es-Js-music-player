// Rappresentare un MUSIC Player che contiene una lista di brani musicali:
// Implementare le seguenti funzionalita':

// - Animazione disco che gira
// - Funzione Play
// - Funzione Pausa
// - Funzione Next
// - Funzione Prev
// - Tempo che scorre
// - Durata brano

let tracks = [
    {'url': './media/song-1.mp3', 'cover': './media/guitar-image.avif', 'artist': 'artist1', 'title': 'song1'},
    {'url': './media/song-2.mp3', 'cover': './media/guitar-images-2.jpeg', 'artist': 'artist2', 'title': 'song2'},
    {'url': './media/song-3.mp3', 'cover': './media/guitar-images-3.jpeg', 'artist': 'artist3', 'title': 'song3'}
];
// Container Dynamic Section 
let wrapper = document.querySelector('#wrapper');

// Variabili d'appoggio
let audio = null;
let counterTrack = 0;

// Audio Cover
function createCover() {
    // Reset all content
    wrapper.innerHTML = '';

    let div = document.createElement('div')
    div.classList.add('col-12',  'col-md-4', 'col-lg-5', 'd-flex', 'justify-content-center')
    div.innerHTML =`
    <!-- Cover Image -->
    <img src="${tracks[counterTrack].cover}" alt="">
            <!-- File Audio -->
            <audio preload="metadata">
              <source src="${tracks[counterTrack].url}" type="audio/mpeg">
            </audio>
         </div>
    `
    wrapper.appendChild(div);

    audio = document.querySelector('audio')
}

// Invocare funzione Audio/Cover
createCover();

// Info Tracks
function createInfo() {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-4', 'col-lg-5');
    div.innerHTML = `
    <h2 class="text-center">${tracks[counterTrack].title}</h2>
    <h3 class="text-center">${tracks[counterTrack].artist}</h3>
    <!-- Progress-Bar -->
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style="width: 0%"></div>
    </div>

    <!-- Tempo inizio fine -->
    <div class="d-flex justify-content-between">
      <p>0:00</p>
      <p>3:00</p>
    </div>

    <!-- Button Audio -->
    <div class="d-flex justify-content-between >
      <butto id="btnBackward">
      <i class="fa-solid fa-backward-fast"></i></i>
      </button>
      <button id="btnStart">
      <i class="fa-solid fa-play"></i></i>
      </button>
      <button id="btnForward">
      <i class="fa-solid fa-forward"></i></i>
      </button>
    </div>
    `
    wrapper.appendChild(div);
}

// Invocare Info/Tracks
createInfo();

// Catturare i bottoni 
let btnBackward = document.querySelector('#btnBackward');
let btnStart = document.querySelector('#btnStart');
let btnForward = document.querySelector('#btnForward');

// Play/Pause
btnStart.addEventListener('click', () => {
    if (audio.paused == true) {
        audio.play();
        btnStart.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else {
        audio.pause();
        btnStart.innerHTML = '<i class="fa-solid fa-play"></i></i>';
    }
})


// Next/Track

btnForward.addEventListener('click', () => {
    counterTrack++;
    createCover();
    createInfo();
})
