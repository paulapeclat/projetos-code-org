//aula 1
var pacman = createSprite(25, 25);
pacman.setAnimation("pacwoman");
pacman.scale = 0.30;
pacman.visible = 0;
//criando obstáculos
var obstaculo1 = createSprite(195,76);
obstaculo1.setAnimation("obstaculo");
obstaculo1.visible = 0;
var obstaculo2 = createSprite(195,250);
obstaculo2.setAnimation("obstaculo_2");
obstaculo2.visible = 0;
var obstaculo3 = createSprite(100,250);
obstaculo3.setAnimation("obstaculo_3");
obstaculo3.visible = 0;
var obstaculo4 = createSprite(300,250);
obstaculo4.setAnimation("obstaculo_3");
obstaculo4.visible = 0;
var nome = createSprite(200, 150);
nome.setAnimation("original.png");
nome.scale = 0.5;
var start = createSprite(200, 235);
start.setAnimation("start.png_1");
start.scale = 0.3;
var sucesso = createSprite(200,250);
sucesso.setAnimation("vencemos.png_1");
sucesso.scale = 0.5;
sucesso.visible = 0;
var trofeu = createSprite(200,150);
trofeu.setAnimation("diamante_1");
trofeu.scale = 1.0;
trofeu.visible = 0;
var fantasmacriper = createSprite(200, 250);
fantasmacriper.setAnimation("criper");
fantasmacriper.scale = 1.0;
fantasmacriper.visible = 0;
//criando pontos comprimidos
var pills = createGroup();
var pontos;
var TotPontos = 0;
var pontuacao = 0;
var ComerPontos = 0;
function criarpontos(numpontos,x_coor,y_coor) {
  for (var i=0; i< numpontos; i++)
{
  pontos = createSprite(20*i+x_coor,y_coor,5,5);
  pontos.shapeColor="orange";
  pills.add(pontos);
 TotPontos++;
}
}
//criando a primeira linha de pontos
criarpontos(16,50,30);
//criando a segunda linha de pontos
criarpontos(16,50,120);
//criando a 3ª linha de pontos
criarpontos(6,50,180);
//criando a 4ª linha de pontos
criarpontos(6,245,180);
//criando a 5ª linha de pontos
criarpontos(6,50,330);
//criando a 6ª linha de pontos
criarpontos(6,245,330);
createEdgeSprites();
var fantasma = createSprite(375, 25);
fantasma.setAnimation("criper");
fantasma.scale = 0.3;
fantasma.visible = 0;
function draw()
{ 
  background("Black");
  if (mousePressedOver(start)) {
    start.destroy();
    nome.destroy();
    pacman.visible = 1;
    fantasma.visible = 1;
    obstaculo1.visible = 1;
    obstaculo2.visible = 1;
    obstaculo3.visible = 1;
    obstaculo4.visible = 1;
  }
  //aula 2
  if (keyDown("left"))
  {
    pacman.setSpeedAndDirection(5,180);
    pacman.rotation = 180;
    if (pacman.x < 0) {
      pacman.x = 400;
    }
    if (pacman.x <fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 180);
    }
    if (pacman.x >fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //Seta para a direita para mover o pacman para a direita
  if (keyDown("right"))
  {
    pacman.setSpeedAndDirection(5,360);
    pacman.rotation = 360;
    //Se o pacman está atrás do fantasma, o fantasma vai em direção a ele
    if (pacman.x > 400) {
      pacman.x = 0;
    }
    if (pacman.x <fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 180);
    }
    //Se o pacman está à frente do fantasma, o fantasma vai em direção a ele
    if (pacman.x >fantasma.x)
    {
      fantasma.setSpeedAndDirection(5, 360);
    }
  }
  //seta para cima para mover o pacman para cima
  if (keyDown("up"))
  {
    pacman.setSpeedAndDirection(5,270);
    pacman.rotation = 270;
    if (pacman.y < 0) {
      pacman.y = 400;
    }
    if (pacman.y <fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y >fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  //seta para baixo para mover o pacman para baixo
  if (keyDown("down"))
  {
    pacman.setSpeedAndDirection(5,90);
    pacman.rotation = 90;
    if (pacman.y > 400) {
      pacman.y = 0;
    }
    if (pacman.y <fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 270);
    }
    if (pacman.y >fantasma.y)
    {
      fantasma.setSpeedAndDirection(5, 90);
    }
  }
  
for (var i = 0;i<TotPontos;i++){
  if (pills.get(i) != undefined && pills.isTouching(pacman))
  {
    pills.get(i).destroy();
    pontuacao = pontuacao + 50;
    ComerPontos++;
    playSound("Apple-Bite.mp3", false);
  }
 }
  fill("orange");
  text(pontuacao,20,20);
  //Aula 3
 
if ( ComerPontos== TotPontos){
  pacman.destroy();
  obstaculo1.destroy();
  obstaculo2.destroy();
  obstaculo3.destroy();
  obstaculo4.destroy();
  sucesso.visible = 1;
  trofeu.visible = 1;
}
  pacman.collide(obstaculo1);
  pacman.collide(obstaculo2);
  pacman.collide(obstaculo3);
  pacman.collide(obstaculo4);
  if (fantasma.isTouching(pacman)) 
  {
    pacman.destroy();
    fantasma.destroy();
    obstaculo1.destroy();
    obstaculo2.destroy();
    obstaculo3.destroy();
    obstaculo4.destroy();
    var fimDeJogo = createSprite(200, 150);
    fimDeJogo.setAnimation("gameo.png");
    fimDeJogo.scale = 0.5;
    fantasmacriper.visible = 1;
  }
  if (fantasma.isTouching(edges))
  {
    fantasma.bounceOff(edges);
  }
  if (fantasma.isTouching(obstaculo1))
  {
    fantasma.bounceOff(obstaculo1);
  }
  if (fantasma.isTouching(obstaculo2))
  {
   fantasma.bounceOff(obstaculo2);
  }
  if (fantasma.isTouching(obstaculo3))
  {
    fantasma.bounceOff(obstaculo3);
  }
  if (fantasma.isTouching(obstaculo4))
  {
    fantasma.bounceOff(obstaculo4);
  }
  drawSprites();
}
