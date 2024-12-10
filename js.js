var vid = document.getElementById('vid');
var p = document.getElementById('p');
var oi = document.getElementById('oi');
var ola = document.getElementById('ola');
var click = 0;
var c = 1;
let au = [10, 10, 100, 1000, 5000, 10000];
var ganho = 0;
var aum1 = document.getElementById('aument1'); var custo1 = document.getElementById('custo1');
var aum2 = document.getElementById('aument2'); var custo2 = document.getElementById('custo2');
var aum3 = document.getElementById('aument3'); var custo3 = document.getElementById('custo3');
var aum4 = document.getElementById('aument4'); var custo4 = document.getElementById('custo4');
var aum5 = document.getElementById('aument5'); var custo5 = document.getElementById('custo5').value;
vid.addEventListener('click', function (){
    click= click + c;
    if(click < 10){
        p.innerText = click.toFixed(2);
    } else if(click < 100) {
        p.innerText = click.toFixed(1);
    } else {
        p.innerText = Math.floor(click);
    }
})

oi.addEventListener('click', function (){
    if(click >= au[0]){
        c = c*1.6;
        click = click - au[0];
        au[0] = au[0]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        if(au[0] < 10){
            ola.innerText = au[0].toFixed(2);
        } else if(au[0] < 100) {
            ola.innerText = au[0].toFixed(1);
        } else {
            ola.innerText = Math.floor(au[0]);
        }
    }
})

aum1.addEventListener('click', function (){
    if(click >= au[1]){
        ganho = ganho + 0.1;
        click = click - au[1];
        au[1] = au[1]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        if(au[1] < 10){
            custo1.innerText = au[1].toFixed(2);
        } else if(au[1] < 100) {
            custo1.innerText = au[1].toFixed(1);
        } else {
            custo1.innerText = Math.floor(au[1]);
        }
    }
})

aum2.addEventListener('click', function (){
    if(click >= au[2]){
        ganho = ganho + 1;
        click = click - au[2];
        au[2] = au[2]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        custo2.innerText = Math.floor(au[2]);
    }
})

aum3.addEventListener('click', function (){
    if(click >= au[3]){
        ganho = ganho + 10;
        click = click - au[3];
        au[3] = au[3]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        custo3.innerText = Math.floor(au[3]);
    }
})

aum4.addEventListener('click', function (){
    if(click >= au[4]){
        ganho = ganho + 100;
        click = click - au[4];
        au[4] = au[4]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        custo4.innerText = Math.floor(au[4]);
    }
})

aum5.addEventListener('click', function (){
    if(click >= au[5]){
        ganho = ganho + 500;
        click = click - au[5];
        au[5] = au[5]*1.5;
        if(click < 10){
            p.innerText = click.toFixed(2);
        } else if(click < 100) {
            p.innerText = click.toFixed(1);
        } else {
            p.innerText = Math.floor(click);
        }
        custo5.innerText = Math.floor(au[5]);
    }
})

setInterval(() => {
    click = click + ganho;
    if(click < 10){
        p.innerText = click.toFixed(2);
    } else if(click < 100) {
        p.innerText = click.toFixed(1);
    } else {
        p.innerText = Math.floor(click);
    }
}, 1000);

