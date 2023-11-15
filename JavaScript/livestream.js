let play = document.querySelectorAll('.play');
let iframe = document.querySelector('iframe');
let click = document.querySelector('clickings');

let arr = [
    "https://www.youtube.com/embed/GiEGS8rzzEA?si=fN8kemYiTACHbfnW",
    "https://www.youtube.com/embed/JN7F2p7Hz7c?si=tZLNrZGVnTFqK6YX",
    "https://www.youtube.com/embed/si9iOi90Glc?si=9m36fHYTpD9HSU5Q",
    "https://www.youtube.com/embed/Nls0sXp1BDw?si=l9jr7UkW3bkaml2y"

];

for (const key in play) 
{
    play[key].addEventListener('click', ()=>{
        iframe.src = arr[key];
    });
}

click.addEventListener('click', ()=>{
    iframe.src = "https://www.youtube.com/embed/kpausxTGHys?si=teeczh1OtOjFiO4F";
});