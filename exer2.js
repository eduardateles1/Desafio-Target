function Gerarfibonacci(number) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    if (1 === number) {
        console.log(`${number} pertence à sequência de Fibonacci`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci`);
    }
}
var f = Gerarfibonacci(10);
console.log(f)