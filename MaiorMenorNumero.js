<!DOCTYPE html>
<html>
 <head>
    Primeira numero:<input id="numero1" type="number"> <br />
    Segundo  numero:<input id="numero2" type="number"> <br />
    Terceiro numero: <input id="numero3" type="number"> <br />
    <button onclick="maior()">Maior</button>
    <button onclick="menor()">Menor</button>

    <script type="text/javascript">
     function maior(){
       var num1 = parseFloat(document.getElementById("numero1").value);
       var num2 = parseFloat(document.getElementById("numero2").value);
       var num3 = parseFloat(document.getElementById("numero3").value);

       var maior = num1;

       if(num2 > maior)
        maior = num2;
       if(num3 > maior)
        maior = num3;

       alert("Maior: "+maior);
     }


  function menor(){
       var num1 = parseFloat(document.getElementById("numero1").value);
       var num2 = parseFloat(document.getElementById("numero2").value);
       var num3 = parseFloat(document.getElementById("numero3").value);

       var menor = num1;

       if(num2 < menor)
        menor = num2;
       if(num3 < menor)
        menor = num3;

       alert("Menor: "+menor);
      }
    </script>

 </head>
</html>