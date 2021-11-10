<!DOCTYPE html>
<html>
  <head>
    <title>Colocar em ordem crescente uma sequencia de caracteres.</title>
    <script>
      function ordenar() {
        var arr = document.getElementById("texto").value.split('');
        var resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = 'Não ordenado:<br>' + arr.join(' ') + '<br><br>';
        var tmp;
        for (var i = 0; i < arr.length - 1; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
            }
          }
        }
       resultadoHTML.innerHTML += 'Ordenado:<br>' + arr.join(' ');
      }
    </script>
  </head>
  <body>
    <h1>Exercício 19</h1>
    <label for="texto">Informe um texto qualquer: </label>
    <input id="texto" type="text" maxlength=100 minlength=2><br>    
    <button onclick="ordenar()">Ordenar</button>
    <div id="resultado"></div>
  </body>
</html>