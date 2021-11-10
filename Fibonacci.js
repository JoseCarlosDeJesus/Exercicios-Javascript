<!DOCTYPE html>
<html>
  <head>
     Primeiro numero:<input id="num" type="number"> <br />
     Segundo numero:<input id="memo" type="number"> <br />
     <button onclick="fibonacci()">Fibonacci</button>
     <script type="text/javascript">  
     function fibonacci(num, memo) {
        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1) return 1;

        return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
     }
      </script>
  <head>
<html>