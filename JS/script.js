// main.js
"use strict"

// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con “facile”=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con “medio” => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con “difficile” => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


let container = document.getElementById("container")
const difficult = document.getElementById("difficulty");

// buttons
const genera = document.querySelector(".genera")

// creo evento al click del pulsante
genera.addEventListener("click",buttonStart);

// invoco funzione button start per creare evento al click
function buttonStart() {
    const difficultyChose = parseInt(difficult.value)


const createGrid =  creationGrid(difficultyChose)
console.log(difficultyChose);


container.innerHTML = ""

// creo ciclo per appendere elementi al container 
for (let i = 0; i < createGrid.length; i++) {
    container.append(createGrid[i])
    
}


}

// creo funzione per generare un  box
function createBoxElement(boxElement,boxCounts){
    // creo costante per creare elementi div per poterli appendere al container
    const  newBoxelement = document.createElement("div");
    // creo costante per fare calcolo di quanti box ci stanno per riga (in base alla difficolta scelta)
    const boxRow = Math.sqrt(boxCounts)
    // aggiungo una classe agli elementi da creare 
    newBoxelement.classList.add("child")
    // in base al calcolo fatto con la costante boxRow imposto la quantità di box che devono stare per riga 
    newBoxelement.style.width = `calc(100%/${boxRow}`

    newBoxelement.innerHTML += boxElement
//   creo evento al click 
    newBoxelement.addEventListener("click",function(){
        // aggiungo classe agli elementi in modo da aggiungere o rimuovere un colore al box selezionato
        newBoxelement.classList.toggle("change_color");

    })
   
    return newBoxelement
}
// creo i box in base alla difficoltà scelta
function creationGrid(boxNumbers,Container) {
    const grid = []
        for (let i = 1; i <= boxNumbers; i++) {
           const createGrid = createBoxElement(i,boxNumbers)
            grid.push(createGrid)
        }
    return grid
  
}



