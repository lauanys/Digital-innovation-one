const currentNumberWrapper = document.getElementById('currentNumber');

const body = document.querySelector('body');

let currentNumber = 0;



function decrement(){
    if(currentNumber <= 1){
        body.style.backgroundColor = '#f01080';
    };
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    
};


function increment(){
    if(currentNumber >= 0){
        body.style.backgroundColor = '#0fff';
    };
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
};
