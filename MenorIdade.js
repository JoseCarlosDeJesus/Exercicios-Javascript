<!DOCTYPE html>
<html>
  <head>
    <title>Menor Idade.</title>
    <script>
      var idade = parseInt(prompt("Informe a sua idade", "18"));
      if (!idade.isNaN) mensagem = "O número informado não é válido!"
      else
      if (idade < 18) mensagem = "A idade informada é de um menor!"
      else
      mensagem = "Se não estiver mentindo é maior de idade!";
      alert(mensagem);
    </script>
  </head>
  <body>
  </body>
</html>