const now =


document.querySelector('.number').style.color= 'Blue';

let view = document.querySelector('.number');
let open = function () {
    return view + 1;
};

view.addEventListener('click', open)

let trial2 = document.getElementById('aboutlink');
trial2.addEventListener('click', function(){
    document.getElementById('aboutlink').innerHTML= 'About Me (5 things to know) &#9786;'
});

let nomba = document.getElementsByClassName('number');
nomba = 1;
let add = nomba + 1;



let counts = setInterval(updated, 1000);
let upto = 0;
function updated() {
    var count = document.getElementById('counter');
    count.innerHTML=++upto;
    if(upto === 1000) {
        clearInterval(counts);
    }
}