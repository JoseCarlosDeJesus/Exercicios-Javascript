!DOCTYPE html>
<html>
  <head>
    <title>Inverter uma sequencia de caracteres utilizando funções nativas do javascript.</title>
    <script>
      function inverter() {
        var nome = document.getElementById("nome").value;
        return nome.split(' ').reverse().join('');
      }
    </script>
  </head>
  <body>
    <h1>Exercício 12</h1>
    <label for="nome">Informe um nome qualquer: </label>
    <input id="nome" type="text" maxlength=100 minlength=2><br>    
    <button onclick="alert(inverter())">Retrevni (Inverter)</button>
  </body>
</html>