// **Fizz Buzz** - Write a program that prints the numbers from 1 to 100. But for multiples of three print
// “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”.

function fizzBuzz(n) {
  var result = '';
  for (var i = 1; i <= n; i++) {
    var isFizz = ((i % 3) == 0);
    var isBuzz = ((i % 5) == 0);
    var isFizzBuzz = (isFizz && isBuzz);
    if(isFizzBuzz) {
      result += 'FizzBuzz ';
    } else if (isFizz) {
      result += 'Fizz ';
    } else if(isBuzz) {
      result += 'Buzz ';
    } else {
      result += i + ' ';
    }
  }
  return result;
}

module.exports = fizzBuzz;