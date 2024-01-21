const hour = document.querySelector("#hour>span:first-of-type");
const minute = document.querySelector("#minute>span:first-of-type");
const second = document.querySelector("#second>span:first-of-type");
const am_pm = document.querySelector('#am-pm>span');

const btnTwelve = document.querySelector('#hour-12');

let twentyFourInterval;
let twelveInterval;

function twentyFourFormat() {

    const btn24 = document.querySelector('.hour-24');
    const btn12 = document.querySelector('.hour-12');

    btn12.style.backgroundColor = 'black';
    btn24.style.backgroundColor = '#8F764F';

    clearInterval(twelveInterval);

  twentyFourInterval = setInterval(() => {
    var date = new Date();

    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (String(hr).length < 2) {
        hour.innerText =  '0' + hr;
    } else {
        hour.innerText = hr;
    }

    if (String(min).length < 2) {
        minute.innerText =  '0' + min;
    } else {
        minute.innerText = min;
    }

    if (String(sec).length < 2) {
        second.innerText =  '0' + sec;
    } else {
        second.innerText = sec;
    }    

    am_pm.innerText = date.toLocaleTimeString().substring(8);
    
  }, 1000);

};

function twelveFormat () {

    const btn24 = document.querySelector('.hour-24');
    const btn12 = document.querySelector('.hour-12');

    btn24.style.backgroundColor = 'black';
    btn12.style.backgroundColor = '#8F764F';

    clearInterval(twentyFourInterval);

     twelveInterval = setInterval(() => {
        var date = new Date();
    
        var hr = date.toLocaleTimeString().substring(0,1);
        var min = date.toLocaleTimeString().substring(2,4);
        var sec = date.toLocaleTimeString().substring(5,7);
    
        if (String(hr).length < 2) {
            hour.innerText =  '0' + hr;
        } else {
            hour.innerText = hr;
        }
    
        if (String(min).length < 2) {
            minute.innerText =  '0' + min;
        } else {
            minute.innerText = min;
        }
    
        if (String(sec).length < 2) {
            second.innerText =  '0' + sec;
        } else {
            second.innerText = sec;
        }    
    
        am_pm.innerText = date.toLocaleTimeString().substring(8);
        
      }, 1000);

};


window.addEventListener("load", twentyFourFormat);
