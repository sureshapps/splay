let track_art = document.querySelector(".track-art");
let track_name = document.querySelector("#playerMusicTitle");
let track_artist = document.querySelector("#playerMusicAuthor");

let playpause_btn = document.querySelector(".playpause-trackImg");

let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector("#seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
{
    name: "Never Gonna Give You Up",
    artist: "Rick Astley",
    image: "Musics/AlbumArts/Whenever_You_Need_Somebody.png",
    path: "Musics/Never Gonna Give You Up.mp3",
},
{
    name: "Moving On ✘ Alone",
    artist: "Musical Medicine",
    image: "Musics/AlbumArts/musicalMedicine.png",
    path: "Musics/music1.m4a"
},
{
    name: "Cinematic ambience",
    artist: "Musical Medicine",
    image: "Musics/AlbumArts/musicalMedicine.png",
    path: "Musics/music2.m4a"
},
{
    name: "Manike Mage Hithe - lo-fi",
    artist: "Musical Medicine",
    image: "Musics/AlbumArts/musicalMedicine.png",
    path: "Musics/music3.m4a",
},
{
    name: "RETRO NOSTALGIA 🕹️!",
    artist: "Musical Medicine",
    image: "Musics/AlbumArts/musicalMedicine.png",
    path: "Musics/music4.m4a",
},
{
    name: "Lily",
    artist: "Alan Walker",
    image: "Musics/AlbumArts/Different_World.png",
    path: "Musics/Lily.mp3",
},
];

function loadTrack(track_index) {
clearInterval(updateTimer);
resetValues();

curr_track.src = track_list[track_index].path;
curr_track.load();

track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;

track_artist.textContent = track_list[track_index].artist;
updateTimer = setInterval(seekUpdate, 1000);

curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}

function playpauseTrack() {
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
curr_track.play();
isPlaying = true;
track_art.classList.add('venylWheel-art')
playpause_btn.src = 'https://img.icons8.com/fluency-systems-regular/452/pause--v1.png';
}

function pauseTrack() {
curr_track.pause();
isPlaying = false;
track_art.classList.remove('venylWheel-art')
playpause_btn.src = 'https://img.icons8.com/fluency-systems-regular/452/play--v1.png';
}

function nextTrack() {
if (track_index < track_list.length - 1)
    track_index += 1;
else track_index = 0;

loadTrack(track_index);
playTrack();
}

function prevTrack() {
if (track_index > 0)
    track_index -= 1;
else track_index = track_list.length - 1;

loadTrack(track_index);
playTrack();
}

function seekTo() {
seekto = curr_track.duration * (seek_slider.value / 100);

curr_track.currentTime = seekto;
}

function seekUpdate() {
let seekPosition = 0;

if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

document.getElementById("playerTrack1").addEventListener("click", () => {
    curr_track.src = track_list[0].path;
    curr_track.load();
    loadTrack(0);
    playTrack();
})
document.getElementById("playerTrack2").addEventListener("click", () => {
    curr_track.src = track_list[1].path;
    curr_track.load();
    loadTrack(1);
    playTrack();
})
document.getElementById("playerTrack3").addEventListener("click", () => {
    curr_track.src = track_list[2].path;
    curr_track.load();
    loadTrack(2);
    playTrack();
})
document.getElementById("playerTrack4").addEventListener("click", () => {
    curr_track.src = track_list[3].path;
    curr_track.load();
    loadTrack(3);
    playTrack();
})
document.getElementById("playerTrack5").addEventListener("click", () => {
    curr_track.src = track_list[4].path;
    curr_track.load();
    loadTrack(4);
    playTrack();
})

document.getElementById("playerTrack2P").addEventListener("click", () => {
    curr_track.src = track_list[1].path;
    curr_track.load();
    loadTrack(1);
    playTrack();
})
document.getElementById("playerTrack3P").addEventListener("click", () => {
    curr_track.src = track_list[2].path;
    curr_track.load();
    loadTrack(2);
    playTrack();
})
document.getElementById("playerTrack4P").addEventListener("click", () => {
    curr_track.src = track_list[3].path;
    curr_track.load();
    loadTrack(3);
    playTrack();
})
document.getElementById("playerTrack5P").addEventListener("click", () => {
    curr_track.src = track_list[4].path;
    curr_track.load();
    loadTrack(4);
    playTrack();
})
document.getElementById("playerTrack6").addEventListener("click", () => {
    curr_track.src = track_list[5].path;
    curr_track.load();
    loadTrack(5);
    playTrack();
})

loadTrack(track_index);

document.getElementById("playerMiniExpandDD").addEventListener("click", () => {
    let playerMini = document.getElementById('playerMini')
    let playerMain = document.querySelector('.playerMain');

    if(playerMain.style.opacity === '0'){
        playerMini.classList.remove('playerMiniExpanded')

        playerMain.style.opacity = '1'
    }else{
        playerMini.classList.add('playerMiniExpanded')

        playerMain.style.opacity = '0'

    }
})
