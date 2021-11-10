<!DOCTYPE html>
<html>
  <head>
    <title>Potenciação exibe resultados:for e math.pow</title>
    <script>
      var base      = 2;
      var expoente  = 8;
      document.write("Base: 2" + "<br>");
      document.write("Expoente: 8" + "<br><br>");
      for (i = 0; i <= expoente; i++) {
        document.write("2<sup>" + i + "</sup> = ");
        document.write(Math.pow(base, i) + "<br>");
      }
   </script>
   </head>
  <body>
    <h1>Exercício 16</h1>
  </body>
</html>