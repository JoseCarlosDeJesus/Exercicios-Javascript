<!DOCTYPE html>
<html>
 <head>
   <title>Numeros Primos de 0 a 200</title>
   <script type="text/javascript" src="script.js"></script>
 </head>
 <body>
   Inicio do intervalo: <input id="inicio" type="number" /> <br />
   Fim do intervalo   : <input id="fim" type="number" /> <br />
   <button onclick="primo()">Testar</button><br />
Resultado: <div id="resposta">
 </body>
</html>
script.js:
function primo(){
  var inicio = 0;
  var fim = 200;
  var resposta = document.getElementById('resposta');
  var texto='';
  var divisores;

  for(var count=inicio ; count<=fim ; count++){
  	divisores=0;
  	for(var aux=1 ; aux<=count ; aux++)
  		if(count % aux == 0)
  			divisores++;

  	if(divisores==2)
  		texto += count + '<br />';
  }

  resposta.innerHTML = texto;
}