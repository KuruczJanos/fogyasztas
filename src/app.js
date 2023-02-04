/*
* File: app.js
* Author: Kurucz János
* Copyright: 2023, Kurucz János
* Group: Szoft 1/I/E
* Date: 2023-02-04
* Github: https://github.com/KuruczJanos/fogyasztas.git
* Licenc: GNU GPL
*/
const kmnyitElem = document.querySelector('#kmnyit');
const kmzarElem = document.querySelector('#kmzar');
const tankolElem = document.querySelector('#tankol');
const calcButton = document.querySelector('#calcButton');
const acElem = document.querySelector('#ac');

calcButton.addEventListener('click',() => {
    let kmnyit = Number (kmnyitElem.value);
    let kmzar = Number (kmzarElem.value);
    let tankol = Number (tankolElem.value);
    let ac = calcac (kmnyit, kmzar, tankol);
    console.log(ac);
    acElem.value = ac;
});

function calcac(kmnyit, kmzar, tankol){
    let ac = (tankol/(kmzar-kmnyit))*100
    return ac;
}