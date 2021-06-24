var title,title_img;
var play,play_img;
var bg_img,bg;
var bg2,bg2_img;
var girl,girl_img;
var shirt1,shirt1_img,shirt1_girl,shirt1_girl_img;
var shirt2,shirt2_img,shirt2_girl,shirt2_girl_img;

function preload(){
  title_img = loadImage("images/title.png");
  play_img = loadImage("images/playbutton.png");
  bg_img = loadImage("images/bg.jpg");
  bg2_img = loadImage("images/bg2.jpg");
  girl_img = loadImage("images/defultgirl.png");
  shirt1_img = loadImage("images/roblox1.png");
  shirt1_girl_img = loadImage("images/roblox1total.png");
  shirt2_img = loadImage("images/roblox2.png");
  shirt2_girl_img = loadImage("images/roblox2total.png");
}
function setup(){
    createCanvas(1280,644);
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

    shirt1 = createSprite(100,50);
    shirt1.addImage(shirt1_img);
    shirt1.scale=0.4;
    shirt1.visible = false;

    shirt1_girl = createSprite(640,322);
    shirt1_girl.addImage(shirt1_girl_img);
    shirt1_girl.visible = false;

    shirt2 = createSprite(100,150);
    shirt2.addImage(shirt2_img);
    shirt2.scale=0.4;
    shirt2.visible = false;

    shirt2_girl = createSprite(640,322);
    shirt2_girl.addImage(shirt2_girl_img);
    shirt2_girl.visible = false;

    

}

function draw(){
    background(0);

    if(mousePressedOver(play)){
       title.visible = false;
       play.visible = false;
       bg.visible = false;
       bg2.visible = true;
       girl.visible = true;
       shirt1.visible = true;
       shirt2.visible = true;
    }

    if(mousePressedOver(shirt1)){
      title.visible = false;
      play.visible = false;
      bg.visible = false;
      bg2.visible = true;
      girl.visible = false;
      shirt1.visible = true;
      shirt1_girl.visible = true;
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
    }

    drawSprites();
}