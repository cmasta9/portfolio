"use strict";

const darkButt = document.getElementById('darkButt');
const nam = document.getElementById('name');
let dark = true;

darkButt.onclick = () => {
    if(dark){
        darkButt.innerHTML = '&#9737'
        document.body.classList.add('light');
        dark = false;
    }
    else{
        darkButt.innerHTML = '&#9790;'
        document.body.classList.remove('light');
        dark = true;
    }
}

nam.onmouseover = () => {
    nam.innerText = 'Cory C(a)masta';
}

nam.onmouseout = () => {
    nam.innerText = 'Cory Camasta'
}

nam.onclick = () => {
    window.scrollTo(0,document.getElementById('bigpic').style.top);
}

