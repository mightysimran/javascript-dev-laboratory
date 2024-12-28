const generate = function(){
    const hex = '0123456789abcdef'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let i;

const start = function(){
    if(!i){
        i = setInterval(changeBg, 1000)
    }
    function changeBg(){
        document.body.style.backgroundColor = generate();
    }
}

const stop = function(){
    clearInterval(i)
    i = null
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#stop').addEventListener('click', stop)