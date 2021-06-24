var title,title_img;
var play,play_img;
var bg_img,bg;
var bg2,bg2_img;
var girl,girl_img;
var mousepointer,mousepointer_img;
var BgMusic,mouseclick,cool;
var shirt1,shirt1_img,shirt1_girl,shirt1_girl_img;
var shirt2,shirt2_img,shirt2_girl,shirt2_girl_img;
var shirt3,shirt3_img,shirt3_girl,shirt3_girl_img;
var shirt4,shirt4_img,shirt4_girl,shirt4_girl_img;
var shirt5,shirt5_img,shirt5_girl,shirt5_girl_img;
var shirt6,shirt6_img,shirt6_girl,shirt6_girl_img;
var shirt7,shirt7_img,shirt7_girl,shirt7_girl_img;
var shirt8,shirt8_img,shirt8_girl,shirt8_girl_img;
var shirt9,shirt9_img,shirt9_girl,shirt9_girl_img;

function preload(){
  title_img = loadImage("images/title.png");
  play_img = loadImage("images/playbutton.png");
  bg_img = loadImage("images/bg.jpg");
  bg2_img = loadImage("images/bg2.jpg");
  girl_img = loadImage("images/defultgirl.png");
  mousepointer_img = loadImage("images/Mousepointer.png");
  shirt1_img = loadImage("images/Shirt1.png");
  shirt1_girl_img = loadImage("images/Shirt1_Worn.png");
  shirt2_img = loadImage("images/Shirt2.png");
  shirt2_girl_img = loadImage("images/Shirt2_Worn.png");
  shirt3_img = loadImage("images/Shirt3.png");
  shirt3_girl_img = loadImage("images/Shirt3_Worn.png");
  shirt4_img = loadImage("images/Shirt4.png");
  shirt4_girl_img = loadImage("images/Shirt4_Worn.png");
  shirt5_img = loadImage("images/Shirt5.png");
  shirt5_girl_img = loadImage("images/Shirt5_Worn.png");
  shirt6_img = loadImage("images/Shirt6.png");
  shirt6_girl_img = loadImage("images/Shirt6_Worn.png");
  shirt7_img = loadImage("images/Shirt7.png");
  shirt7_girl_img = loadImage("images/Shirt7_Worn.png");
  shirt8_img = loadImage("images/Shirt8.png");
  shirt8_girl_img = loadImage("images/Shirt8_Worn.png");
  shirt9_img = loadImage("images/Shirt9.png");
  shirt9_girl_img = loadImage("images/Shirt9_Worn.png");
  BgMusic = loadSound("sounds/Wolf Moon - Unicorn Heads.mp3");
  mouseclick = loadSound("sounds/Mouseclick.wav");
  cool = loadSound("sounds/Cool.wav");
}
function setup(){
    createCanvas(1280,644);

    BgMusic.loop();

    bg = createSprite(640,322);
    bg.scale=0.7;
    bg.addImage(bg_img);

    title = createSprite(650,80);
    title.scale = 1.5;
    title.addImage(title_img);

    play = createSprite(900,200);
    play.scale=0.2;
    play.addImage(play_img);

    bg2 = createSprite(640,322);
    bg2.addImage(bg2_img);
    bg2.scale =1.5;
    bg2.visible = false;

    girl = createSprite(640,332);
    girl.addImage(girl_img);
    girl.visible = false;

    shirt1 = createSprite(100,100);
    shirt1.addImage(shirt1_img);
    shirt1.scale=0.4;
    shirt1.visible = false;

    shirt1_girl = createSprite(640,322);
    shirt1_girl.addImage(shirt1_girl_img);
    shirt1_girl.visible = false;

    shirt2 = createSprite(100,250);
    shirt2.addImage(shirt2_img);
    shirt2.scale=0.4;
    shirt2.visible = false;

    shirt2_girl = createSprite(640,322);
    shirt2_girl.addImage(shirt2_girl_img);
    shirt2_girl.visible = false;

    shirt3 = createSprite(100,400);
    shirt3.addImage(shirt3_img);
    shirt3.scale=0.4;
    shirt3.visible = false;

    shirt3_girl = createSprite(640,322);
    shirt3_girl.addImage(shirt3_girl_img);
    shirt3_girl.visible = false;

    shirt4 = createSprite(100,550);
    shirt4.addImage(shirt4_img);
    shirt4.scale=0.4;
    shirt4.visible = false;

    shirt4_girl = createSprite(640,322);
    shirt4_girl.addImage(shirt4_girl_img);
    shirt4_girl.visible = false;

    shirt5 = createSprite(1150,100);
    shirt5.addImage(shirt5_img);
    shirt5.scale=0.4;
    shirt5.visible = false;

    shirt5_girl = createSprite(640,322);
    shirt5_girl.addImage(shirt5_girl_img);
    shirt5_girl.visible = false;
    
    shirt6 = createSprite(1150,250);
    shirt6.addImage(shirt6_img);
    shirt6.scale=0.4;
    shirt6.visible = false;

    shirt6_girl = createSprite(640,322);
    shirt6_girl.addImage(shirt6_girl_img);
    shirt6_girl.visible = false;

    shirt7 = createSprite(1150,400);
    shirt7.addImage(shirt7_img);
    shirt7.scale=0.4;
    shirt7.visible = false;

    shirt7_girl = createSprite(640,322);
    shirt7_girl.addImage(shirt7_girl_img);
    shirt7_girl.visible = false;
 
    shirt8 = createSprite(1150,550);
    shirt8.addImage(shirt8_img);
    shirt8.scale=0.4;
    shirt8.visible = false;

    shirt8_girl = createSprite(640,322);
    shirt8_girl.addImage(shirt8_girl_img);
    shirt8_girl.visible = false;

    shirt9 = createSprite(1150,550);
    shirt9.addImage(shirt9_img);
    shirt9.scale=0.4;
    shirt9.visible = false;

    shirt9_girl = createSprite(640,322);
    shirt9_girl.addImage(shirt9_girl_img);
    shirt9_girl.visible = false;

    mousepointer = createSprite(0,0);
    mousepointer.addImage(mousepointer_img);
    mousepointer.scale = 0.1;
    
}

function draw(){
    background(0);

    

    mousepointer.x = World.mouseX;
    mousepointer.y = World.mouseY;

    if(mousePressedOver(play)){
       title.visible = false;
       play.visible = false;
       bg.visible = false;
       bg2.visible = true;
       girl.visible = true;
       shirt1.visible = true;
       shirt2.visible = true;
       shirt3.visible = true;
       shirt4.visible = true;
       shirt5.visible = true;
       shirt6.visible = true;
       shirt7.visible = true;
       shirt8.visible = true;
       shirt9.visible = true;
       mouseclick.play();
    }

    if(mousePressedOver(shirt1)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = true;
      shirt2.visible = true;
      shirt2_girl.visible = false;
      shirt3.visible = true;
      shirt3_girl.visible = false;
      shirt4.visible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
      cool.play();
    }

    if(mousePressedOver(shirt2)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = true;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
      

    }
    if(mousePressedOver(shirt3)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = true;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
    }
    if(mousePressedOver(shirt4)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = true;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
    }
    if(mousePressedOver(shirt5)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = true;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
    }
    if(mousePressedOver(shirt6)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = true;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = false;
    }
    if(mousePressedOver(shirt7)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = true;
      shirt8.visible = true;
      shirt8_girl.visible = false;
    }
    if(mousePressedOver(shirt8)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = false;
      shirt2.visible= true;
      shirt2_girl.visible = false;
      shirt3.vidible = true;
      shirt3_girl.visible = false;
      shirt4.vidible = true;
      shirt4_girl.visible = false;
      shirt5.visible = true;
      shirt5_girl.visible = false;
      shirt6.visible = true;
      shirt6_girl.visible = false;
      shirt7.visible = true;
      shirt7_girl.visible = false;
      shirt8.visible = true;
      shirt8_girl.visible = true;
    }
    drawSprites();
}