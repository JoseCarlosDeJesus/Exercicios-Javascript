<!DOCTYPE html>
<html>
  <head>
    <title>1001 Numero Primo</title>
    <script>
      var primosEncontrados = 0;
      for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
        var ehPrimo = true;
        for (divisor = 2; dividendo > divisor ; divisor++) {
          if (dividendo % divisor == 0) {
            ehPrimo = false;
            break;
          };
        };
        if (Boolean(ehPrimo)) { 
          primosEncontrados++;
        }
      };
      document.write("O 1001o número primo é: ");
      document.write(--dividendo + '<br><br>');
    </script>
  </head>
  <body>
  </body>
</html>