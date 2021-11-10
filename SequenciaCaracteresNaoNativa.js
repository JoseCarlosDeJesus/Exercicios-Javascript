<!DOCTYPE html>
<html>
  <head>
    <title>Inverta uma sequência de caracteres informada sem utilizar funções nativas JavaScript.</title>
    <script>
      function inverter() {
        var nome = document.getElementById("nome").value;
        var nomeInvertido = '';
        for (var i = nome.length - 1; i >= 0; i--) {
          nomeInvertido += nome[i];
        }
        return nomeInvertido;
      }
    </script>
  </head>
  <body>
    <label for="nome">Informe um nome qualquer: </label>
    <input id="nome" type="text" maxlength=100 minlength=2><br>    
    <button onclick="alert(inverter())">Retrevni (Inverter)</button>
  </body>
</html>