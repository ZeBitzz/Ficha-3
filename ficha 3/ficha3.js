let primeiro = document.getElementById("p2");

console.log(primeiro);  

let segundo = document.getElementsByTagName("p")
for(let p of segundo){
console.log(segundo)
}

let terceiro = document.getElementsByTagName("p");
for(let p of terceiro){
console.log(p.innerHTML)
}

let quarto =document.getElementsByClassName("red")
for(let elm of quarto)
console.log(elm.innerHTML)

let quinto =document.querySelector("p#p3")
console.log(quinto)

let sexto = document.querySelectorAll("p,div")
for(let elm of sexto){
console.log(elm.innerHTML)
}

let setimo = document.querySelectorAll("span")
for(let elm of setimo){
    console.log(elm.innerHTML)
}


let oitavo = document.querySelectorAll("div span")
for(let elm of oitavo){
    console.log(elm.innerHTML)
}

let nono = document.querySelectorAll("body>span")
for(let sdivs of nono){
    console.log(sdivs)
}
