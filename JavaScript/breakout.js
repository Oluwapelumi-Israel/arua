let sessionOne = document.querySelector('#session_1');
let sessionOneMobile = document.querySelector('#tab1');
let sessionTwo = document.querySelector('#session_2');
let sessionTwoMobile = document.querySelector('#tab2');
let sessionThree = document.querySelector('#session_3');
let sessionThreeMobile = document.querySelector('#tab3');

let sessionDayOne = document.querySelector('#day_1');
let sessionDayTwo = document.querySelector('#day_2');
let sessionDayThree = document.querySelector('#day_3');


sessionDayOne.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayOne.className = "days active";
    sessionOne.className = "table_container";
    sessionOneMobile.className = "min_table";
});

sessionDayTwo.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayTwo.className = "days active";
    sessionTwo.className = "table_container";
    sessionTwoMobile.className = "min_table";
});

sessionDayThree.addEventListener('click' , ()=>{
    removeVisibility();
    removeActive();

    sessionDayThree.className = "days active";
    sessionThree.className = "table_container";
    sessionThreeMobile.className = "min_table";
});




function removeVisibility()
{
    sessionOne.className = "table_container visible";
    sessionTwo.className = "table_container visible";
    sessionThree.className = "table_container visible";

    sessionOneMobile.className = "min_table visible";
    sessionTwoMobile.className = "min_table visible";
    sessionThreeMobile.className = "min_table visible";
}


function removeActive()
{
    sessionDayOne.className = "days";
    sessionDayTwo.className = "days";
    sessionDayThree.className = "days";
}