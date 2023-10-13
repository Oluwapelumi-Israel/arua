import speakers from "./JavaScript/Help/config.js";
// Modals JavaScript Variables
let availableSpeakers = document.querySelectorAll('.speaks.available');
let availableSpeakersImage = document.querySelectorAll('.speaks.available .img img');
let modalImage = document.querySelector('.modal_container .modal_img img');
let name = document.querySelector('.modal_container .modal_description .modal_name');
let title = document.querySelector('.modal_container .modal_description .modal_title');
let category = document.querySelector('.modal_container .modal_description .modal_category');
let profile = document.querySelector('.modal_container .modal_description .profile');
let cancel = document.querySelector('.modal .cancel');
let modal = document.querySelector('.modal');
let modal_conatiner = document.querySelector('.modal_container');




// Programme Days JavaScript Manipulation

let dayone = document.querySelector('.day_1');
let daytwo = document.querySelector('.day_2');
let daythree = document.querySelector('.day_3');

let navdayone = document.querySelector('.days section:nth-of-type(1)');
let navdaytwo = document.querySelector('.days section:nth-of-type(2)');
let navdaythree = document.querySelector('.days section:nth-of-type(3)');



// time JavaScript Manipulation


let daysd = document.getElementById('days');
let days = document.querySelector('.days p:nth-of-type(1)');
let hoursd = document.getElementById('hours');
let hours = document.querySelector('.hours p:nth-of-type(1)');
let minutesd = document.getElementById('minutes');
let minutes = document.querySelector('.minutes p:nth-of-type(1)');
let secondsd = document.getElementById('seconds');
let seconds = document.querySelector('.seconds p:nth-of-type(1)');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '11/15/2023 00:00:00';
            // date format mm/dd/yy

let x = setInterval(()=>{

    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes, seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    // output the result in the element with id
    daysd.innerHTML = `${d} <br><span style="margin-top: 10px; font-size: 0.5em; font-weight: bold;">days<span>`;
    days.innerHTML = `${d}`;
    hoursd.innerHTML = `${h} <br><span style="margin-top: 10px;font-size: 0.5em;font-weight: bold;">hours<span>`;
    hours.innerHTML = `${h}`;
    minutesd.innerHTML = `${m} <br><span style="margin-top: 10px; font-size: 0.5em;font-weight: bold;">minutes<span>`;
    minutes.innerHTML = `${m}`;
    secondsd.innerHTML = `${s} <br><span style="margin-top: 10px; font-size: 0.5em;font-weight: bold;">seconds<span>`;
    seconds.innerHTML = `${s}`;

    // animate stroke
    dd.style.strokeDashoffset = 440 - (400 * d) / 365;
    // 365 days in a year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 hrs in a day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes in an hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds in a minute


    if(distance < 0)
    {
        clearInterval(x);
        document.getElementById("time_1").style.display = 'none';
        document.querySelector('.time_2').style.display = 'none'
        document.querySelector('.newyear').style.display = 'block';
    }
},);


navdayone.addEventListener('click' , () => {
    removeVisibility();
    removeActive();
    dayone.classList.remove('visible');
    navdayone.classList.add('active');
});

navdaytwo.addEventListener('click' , () => {
    removeVisibility();
    removeActive();
    daytwo.classList.remove('visible');
    navdaytwo.classList.add('active');
});

navdaythree.addEventListener('click' , () => {
    removeVisibility();
    removeActive();
    daythree.classList.remove('visible');
    navdaythree.classList.add('active');
});



let removeVisibility = () => {
    dayone.className = "day_1 visible";
    daytwo.className = "day_2 visible";
    daythree.className = "day_3 visible";
};

let removeActive = () => {
    navdayone.className = '';
    navdaytwo.className = '';
    navdaythree.className = '';
};




for(let i = 0; i < availableSpeakers.length; i++)
{
    availableSpeakers[i].addEventListener('click' , () => {
        modalImage.src = availableSpeakersImage[i].src;
        name.innerText = speakers.keynotespeakers.name[i];
        title.innerText = speakers.keynotespeakers.title[i];
        category.innerText = speakers.keynotespeakers.category[i];
        profile.innerHTML = speakers.keynotespeakers.profile[i];

        modal.className = "modal display";

    });

    availableSpeakersImage[i].addEventListener('mouseenter' , (e) => {

        
        modalImage.src = availableSpeakersImage[i].src;
        name.innerText = speakers.keynotespeakers.name[i];
        title.innerText = speakers.keynotespeakers.title[i];
        category.innerText = speakers.keynotespeakers.category[i];
        profile.innerHTML = speakers.keynotespeakers.profile[i];

        modal.className = "modal display";

    });

}


// Speakers Section JavaScript...
cancel.addEventListener('click' , ()=>{
    modal.className = "modal";
});

modal_conatiner.addEventListener('mouseenter' , ()=>{
    modal.className = "modal display";
});


modal_conatiner.addEventListener('mouseleave' , ()=>{
    modal.className = "modal";
});






