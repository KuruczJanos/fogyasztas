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
const radiusElem = document.querySelector('#radius');
const heightElem = document.querySelector('#height');
const calcButton1 = document.querySelector('#calcButton1');
const areaElem = document.querySelector('#area');

calcButton1.addEventListener('click',() => {

    let radius = Number (radiusElem.value);
    let height = Number (heightElem.value);
    let area = calcarea (radius, height);
    console.log(area);
    areaElem.value = area;
});


function calcarea(radius, height){
    let area = (1.0 / 3.0)*Math.pow(radius, 2)*Math.PI*height;
    return area;
}
const atmeroElem = document.querySelector('#atmero');
const calcButton2 = document.querySelector('#calcButton2');
const area1Elem = document.querySelector('#area1');
const priceElem = document.querySelector('#price')

calcButton2.addEventListener('click',() => {

    let atmero = Number (atmeroElem.value);
    let area1 = calcarea1 (atmero);
    let price = calcprice (area1)
    console.log(area1);
    area1Elem.value = area1;
    priceElem.value = price;
});

function calcarea1(atmero){
    let area1 = Math.pow((atmero/2), 2)*Math.PI
    return area1;
}
function calcprice(area1){
    let price = area1*2500
    return price;
}