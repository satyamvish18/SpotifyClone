console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  { songName : "wariyo mortal", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
  { songName : "cielo-huma huma", filepath: "song/2.mp3", coverpath: "cover/2.jpg"},
  { songName : "diff kev- invicible", filepath: "song/3.mp3", coverpath: "cover/3.jpg"},
  { songName : "different heaven and ehide", filepath: "song/4.mp3", coverpath: "cover/4.jpg"},
  { songName : "janji heroes to hide", filepath: "song/5.mp3", coverpath: "cover/5.jpg"},
  { songName : " rabbas-salam-e-ishq", filepath: "song/6.mp3", coverpath: "cover/6.jpg"},
  { songName : "newzick-salam-e-ishq", filepath: "song/7.mp3", coverpath: "cover/7.jpg"},
  { songName : "maortaligs-salam-e-ishq", filepath: "song/8.mp3", coverpath: "cover/8.jpg"},
  { songName : "semester-salam-e-ishq", filepath: "song/9.mp3", coverpath: "cover/9.jpg"},
  { songName : "done-salam-e-ishq", filepath: "song/10.mp3", coverpath: "cover/10.jpg"},
]

songItems.forEach((element,i)=> {
  console.log(element,i);
    element.getElementByTagName("img")[0].src = song[i].coverpath;
   element.getElementByClassName("songName")[0].innerText = songs[i].songName;
})

audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
  else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=1;
      }
 })

