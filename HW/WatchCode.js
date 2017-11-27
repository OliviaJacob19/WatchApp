var slider;
var whatsup;

var hand;
var img2;
var img3;
var img4;
var img5;
var img6;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;

var imgX ;

var index=0;

function preload(){
//imgX = [loadImage("hand-and-arm-hi.png"),loadImage("1860.png")]

  hand = loadImage("hand-and-arm-hi.png"); //http://www.clker.com/clipart-hand-and-arm.html
  img2 = loadImage("1860.png"); //http://antiqwatch.com/old-watches/famous-american-railroad-pocket-watches.html
  img3 = loadImage("1870.png"); //http://camberwatches.com/press.html
  img4 = loadImage("1880.png"); //https://werden.deviantart.com/art/pocketwatch-182925540
  img5 = loadImage("1890.png"); //https://eveyd.deviantart.com/art/Antique-Vintage-Pocket-Watch-png-268108244
  img6 = loadImage("1900.png"); //http://www.pngmart.com/image/20100
  img7 = loadImage("1910.png"); //https://www.rubylane.com/item/576196-1405-007/Elgin-Antique-Ladies-Open-Face-Pocket
  img8 = loadImage("1920.png"); //http://www.montanawatch.com/1920/n21k0h7ln8ncsaqpalyq9ik81s3a4u
  img9 = loadImage("1930.png"); //http://www.pngmart.com/image/20100
  img10 = loadImage("1940.png"); //http://www.pngmart.com/image/20100
  //img11 = loadImage("1940.png"); //http://www.pngmart.com/image/20100
  img12 = loadImage("1950.png"); //http://www.pngmart.com/image/20100
  img13 = loadImage("1960.png"); //http://www.pngmart.com/image/20100
  img14 = loadImage("1970.png"); //https://fcbayern.com/shop/us/vintage-watch/21777/
  img15 = loadImage("1980.png"); //http://www.pngmart.com/image/20100
  img16 = loadImage("1990.png"); //http://www.pngmart.com/image/20100
  img17 = loadImage("2000.png"); //http://www.pngmart.com/image/20100
  img18 = loadImage("2010.png"); //http://www.pngmart.com/image/20100
  img19 = loadImage("2020.png"); //http://booredatwork.com/lenovo-magic-view-smartwatch-concept/

}
var button;

function setup() {
  createCanvas(2000,2000);
  background(65, 198, 192);
  button = createButton('change watch');
button.position(100,100);
button.mousePressed(changeWatch);
button.mousePressed(changeDate);
  slider = createSlider(1860, 2030,1860,10);
  image(hand, 350,150,800,300);
  imgX=[img2,img3,img4,img5,img6,img7,img8,img9,img10,img12,img13,img14,img15,img16,img17,img18,img19];

}


function changeWatch(){
  index = index+1;
  background(65, 198, 192);

}

function draw() {
  background(65, 198, 192);
  image(hand, 350,150,800,300);
  image(imgX[index%imgX.length],680,190,210,210);
  slider.position(600, 400);
  slider.style('width', '110px');
  whatsup = slider.value();
  var hi = map(whatsup,1860,2020,580,710);
  text(whatsup, hi, 400);

}

function changeDate() {
slider.value(whatsup+10);
console.log("hi, i'mworking");
if (slider.value>2020){
  silder.value(1860);
}

 }
