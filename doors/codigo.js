//Crie Sprites e Defina Animações
var cen = createSprite(200, 200);
cen.setAnimation("Png (9) (1) (1).png_1");
var garota = createSprite(200, 40);
garota.setAnimation("Png (11).png_1");
//Redimensionar sprites
cen.scale=0.5;
garota.scale=0.5;

//Grupo
var grupoVirus = createGroup();
var grupoAntisseptico = createGroup();
var totalA=0;
var totalV=0;
var pontuacao=0;
var contagem = 0;

//Função draw principal
function draw(){
fill("white");
virusGerador();
garota.x=World.mouseX;
garota.y = World.mouseY;
if(grupoVirus.isTouching(garota)){
for (var i = 0;i<totalV;i++){
if ((grupoVirus.get(i) != undefined) && grupoVirus.get(i).isTouching(garota))
  {
    playSound("sound://category_explosion/fun_bonus_explode_9.mp3", false);
    grupoVirus.get(i).destroy();
    pontuacao=pontuacao-50;
  }
 }
}

if(grupoAntisseptico.isTouching(garota)){
  for (var j = 0;j<totalA;j++){
if ((grupoAntisseptico.get(j) != undefined) && grupoAntisseptico.get(j).isTouching(garota))
  {
    playSound("sound://category_tap/level_select_1.mp3", false);
    grupoAntisseptico.get(j).destroy();
    pontuacao=pontuacao+50;
  }
 }
}
background("black");
textFont("tahoma");
textSize(24);
text("Pontuação:"+pontuacao,130,50);
drawSprites();
contagem = contagem+1;

}
function virusGerador(){
if (contagem == 30) {
contagem = 0;
var virus = createSprite(randomNumber(25,370), randomNumber(300,400));
virus.setAnimation("Png (11).png_1");
virus.scale=0.4;
totalV = totalV + 1;
grupoVirus.add(virus);
grupoVirus.setVelocityEach(0, -15);
var antisseptico = createSprite(randomNumber(25,370), randomNumber(300,400));
antisseptico.setAnimation("Png (12).png_1");
antisseptico.scale=0.5;
totalA = totalA + 1;
grupoAntisseptico.add(antisseptico);
grupoAntisseptico.setVelocityEach(0, -15);
}

}
