let play = document.querySelectorAll('.play');
let iframe = document.querySelector('iframe');

let arr = [
    "https://www.youtube.com/embed/phK1Hf3ZF2w?si=iejSAqudZT6fc19x",
    "https://www.youtube.com/embed/vp2hLju39QM?si=BXZnUUEkwhAMc8T9",
    "https://www.youtube.com/embed/4IN7R_QOdzI?si=cbmxlSIgARromWDd",
    "https://www.youtube.com/embed/kLCSOaVvMEY?si=25EWNFCZNE1sdpZX"

];

for (const key in play) 
{
    play[key].addEventListener('click', ()=>{
        iframe.src = arr[key];
    });
}