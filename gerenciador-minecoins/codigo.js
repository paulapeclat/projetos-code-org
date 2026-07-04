var mesada = 100;
setNumber("quantidade_Minecoins", mesada);
var economizar = promptNum("Quanto dinheiro você quer economizar neste mês?");
onEvent("diamante", "click", function( ) {
  mesada = mesada - 10;
  setNumber("quantidade_Minecoins", mesada);
  if (mesada < economizar) {
    setProperty("novo", "background-color", "red");
  }
});
onEvent("esmeralda", "click", function( ) {
  mesada = mesada -2 ;
  setNumber("quantidade_Minecoins", mesada);
  if (mesada < economizar) {
    setProperty("novo", "background-color", "red");
  }
});
onEvent("ouro", "click", function( ) {
  mesada = mesada - 5 ;
  setNumber("quantidade_Minecoins", mesada);
  if (mesada < economizar) {
    setProperty("novo", "background-color", "red");
  }
});
onEvent("novo", "click", function( ) {
  mesada = mesada + 100;
  setNumber("quantidade_Minecoins", mesada);
  economizar = promptNum("Quanto dinheiro você quer economizar neste mês?");
  setProperty("image1", "background-color", "seagreen");
});
