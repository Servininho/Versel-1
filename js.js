var vid = document.getElementById('vid');
var p = document.getElementById('p');
var oi = document.getElementById('oi');
var click = 0;
var c = 1;
var au = 10;
vid.addEventListener('click', function (){
    click= click + c;
    p.innerText = click;
})
oi.addEventListener('click', function (){
    if(click>=au){
        c++;
        click= click - au;
        au = au*1.5;
        p.innerText = click;
    }
})
