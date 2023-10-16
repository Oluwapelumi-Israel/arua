let sessionOne = document.querySelector('#session_1');
let sessionTwo = document.querySelector('#session_2');
let sessionThree = document.querySelector('#session_3');

let sessionDayOne = document.querySelector('#day_1');
let sessionDayTwo = document.querySelector('#day_2');
let sessionDayThree = document.querySelector('#day_3');


sessionDayOne.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayOne.className = "days active";
    sessionOne.className = "sessions";
});

sessionDayTwo.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayTwo.className = "days active";
    sessionTwo.className = "sessions";
});

sessionDayThree.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayThree.className = "days active";
    sessionThree.className = "sessions";
});




function removeVisibility()
{
    sessionOne.className = "sessions visible";
    sessionTwo.className = "sessions visible";
    sessionThree.className = "sessions visible";
}


function removeActive()
{
    sessionDayOne.className = "days";
    sessionDayTwo.className = "days";
    sessionDayThree.className = "days";
}