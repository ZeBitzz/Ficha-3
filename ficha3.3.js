let table= document.createElement("table")
let tr1 = document.createElement("tr")
let th1 = document.createElement("th")


let th2 = document.createElement("th")


tr1.appendChild(th1)
tr1.appendChild(th2) 

let tr2=document.createElement("tr")
let td1=document.createElement("td")

let td2=document.createElement("td")


tr2.appendChild(td1)
tr2.appendChild(td2)
table.append(tr1)
table.appendChild(tr2)
document.body.appendChild(table)

const b = document.createElement("table");
b.innerHTML += `<tr><th>Escola</th><th>Local</th></tr><tr><td>ESMAD</td><td>Vila do Conde</td></tr>`
document.body.appendChild(b);

let tableToEdit =document.querySelector("table")
tableToEdit.innerHTML += `<tr><td>ISEP</td><td>Porto</td></tr>`

let td =document.querySelector("td:last-of-type")
td.innerHTML ="Vila Do Conde/Póvoa de Varzim"

let parent =document.querySelector("tbody:first-of-type")
let child=document.querySelector("tr:first-of-type")
parent.removeChild(child)
