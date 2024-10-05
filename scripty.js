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

email.onmouseover = () => {
    let hoverCont = document.createElement('div');
    hoverCont.classList.add('hoverCont');
    hoverCont.id = 'hoverCont';
    hoverCont.innerText = 'cmasta99@gmail.com';
    email.appendChild(hoverCont);
    hoverCont.style.top = email.style.top;
    hoverCont.style.left = Number(email.style.left) - hoverCont.offsetWidth/3 + 'px';
}

email.onmouseout = () => {
    if(document.getElementById('hoverCont')){
        document.getElementById('hoverCont').remove();
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

