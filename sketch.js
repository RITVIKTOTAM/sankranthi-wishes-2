var kite1,kite2,background,kite1Image,kite2Image,backgroundImage,sankranthiImage,sankranthi;


function preload(){

   backgroundImage = loadImage("background1.png");
   kite1Image = loadImage("kite1.png");
   kite2Image = loadImage("kite2.png");
   sankranthiImage = loadImage("sankranthi name.png");

}



function  setup(){
   createCanvas(1200,600); 

    background = createSprite(600,350,400,400);
    background.addImage("BACKGROUND",backgroundImage);

    kite1 = createSprite(1060,100,20,20);
    kite1.addImage("KITE1",kite1Image);

    kite2 = createSprite(400,100,5,5);
    kite2.addImage("KITE2",kite2Image);

    sankranthi = createSprite(700,90,150,20);
    sankranthi.addImage("SANKRANTHI",sankranthiImage);


}

function draw(){

  
drawSprites();

}