// cycle method
    var n = Number(prompt('Please enter the sequence number of Fibonacci numbers'));
    var numbersFibonacci = [1, 1, 2];
        for (var i=3; i<=n; i++) {
        numbersFibonacci[i] = numbersFibonacci[i-1] + numbersFibonacci[i-2];
        var fib = numbersFibonacci[i];
    }
    numbersFibonacci.push = fib;
    document.write(numbersFibonacci[n-1]);

// recursive method
// var n = Number(prompt('Please enter the sequence number of Fibonacci numbers'));
// function fib(n){
//     if (n === 1) {
//         return 1;
//     } 
//     else if (n === 2){
//         return  1;
//     }
//     else {
//      return fib(n-1) + fib(n-2);
//   }
// }
// document.write(fib(n));