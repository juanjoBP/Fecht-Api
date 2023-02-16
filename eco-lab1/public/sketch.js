let canvas;
let urls = [
   "https://randomuser.me/api/",
   "https://api.coindesk.com/v1/bpi/currentprice.json",
   "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
   "https://catfact.ninja/fact",

];
let randomUser = [];
let bitcoinPrice = [];
let population = [];
let catFact = [];
let btn = document.getElementById("btnClick");


btn.addEventListener("click", function () {
    fetch(imageUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        image.src = result.message;
      });
});
function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

const requests = urls.map((url) => fetch(url).then((res) => res.json()));
const allData = Promise.all(requests);
  allData.then((data) => {
    console.log(
      (randomUser = JSON.stringify(
        data[0].results[0].name.first +
          " " +
          data[0].results[0].name.last +
          " " +
          data[0].results[0].email
      ))
    );
    console.log(
      (bitcoinPrice = JSON.stringify(
        data[1].bpi.USD.code + "  " + data[1].bpi.USD.rate
      ))
    );
    console.log(
      (population = JSON.stringify(
        data[2].data[0].Nation + " " + data[2].data[0].Population
      ))
    );
    console.log((catFact = JSON.stringify(data[3].fact)));
  });
}


function draw() {
    background(0,);
    newCursor();
    textSize(15);
    textWrap(WORD);
    text("ID user: " + " " + randomUser, 50, 50, 300);
    text("Bitcoin Price: " + " " + bitcoinPrice, 50, 50 + 100, 300);
    text("Nation population: " + " " + population, 50, 50 + 200, 300);
    text("Cat Fact: " + " " + catFact, 50, 50 + 300, 300);
}

function mouseClicked(){
}
    
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}