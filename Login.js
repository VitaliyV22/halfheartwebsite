

const heading = document.querySelector('h1')

setInterval(function() {
    if(heading.classList.contains("big")){
        heading.innerText= "HEART"
    } else {
        heading.innerText = "HALF"
    }
    heading.classList.toggle("big")
    heading.classList.toggle("small")
},1000)