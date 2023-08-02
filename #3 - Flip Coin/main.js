var heads = document.getElementById("heads");
var tails = document.getElementById("tails");

var tails_num = 0;
var heads_num = 0;

var tails_span = document.getElementById("tails_number");
var heads_span = document.getElementById("heads_number");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function spin(){
    heads.style.animation = "rotate 0.3s ease";
    tails.style.animation = "rotate 0.3s ease";
    var choice = getRandomInt(2)
    if(choice == 0){
        heads.style.display = "none";
        tails.style.display = "block";
        tails_num = tails_num + 1
    } else if(choice == 1){
        heads.style.display = "block";
        tails.style.display = "none";
        heads_num = heads_num +1
    }
    tails_span.innerHTML = tails_num;
    heads_span.innerHTML = heads_num;
}

