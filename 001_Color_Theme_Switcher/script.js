let body = document.querySelector("body");
let colors = document.querySelectorAll(".color");

// console.log(colors)
colors.forEach(function (color) {
    color.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'orangered'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'gold'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'mediumslateblue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'darkslateblue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'chartreuse'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'lime'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'springgreen'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'dodgerblue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'chocolate'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'silver'){
            body.style.backgroundColor = e.target.id
        }
    })
})