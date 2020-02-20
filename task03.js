/*Нужно написать функцию, которая возвращает n-ную
запись в определенной последовательности, причем n
— число, которое передается в качестве аргумента
функции.
*/
function getFibonacciNumber(n) {
    if(n <= 1){
        return n;
    }
    else{
        return fib(n - 1) + fib(n - 2);
    }
  }

  function getFibonacciNumber1(n) {
    let previous1 = 1;
    let previous2 = 1;
    for (let i = 3; i <= n; i++) {
      let temp = previous1 + previous2;
      previous1 = previous2;
      previous2 = temp;
    }
    return previous2;
}
console.log(fib(5));
console.log(fib1(5));
