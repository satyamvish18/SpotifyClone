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

//Listen to Events
  audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  //update seekbar

   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
      audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
      })
   }

  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     console.log(e.target);
     makeAllPlays();
     e.target.classList.remove('fa-play-circle');
     e.target.classlist.add('fa-pause-circle')
   })
   })
   

// console.log("Welcome to Spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
//     {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
//     {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
// ]

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })