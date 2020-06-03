// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.
<
script >
    var factors = {};
factors.getFactors = function(number) {
    var factors = [];
    var highFactors = [];

    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
        if (number % possibleFactor == 0) {
            factors[factors.length] = possibleFactor;

            var otherPossibleFactor = number / possibleFactor;
            if (otherPossibleFactor > possibleFactor) {
                highFactors[highFactors.length] = otherPossibleFactor;
            }
        }
        possibleFactor++;
    }
    for (var i = highFactors.length - 1; i >= 0; i--) {
        factors[factors.length] = highFactors[i];
    }
    return factors;
};
var getNaturalFactors = function(number) {
    var naturalFactors = factors.getFactors(number);
    naturalFactors.splice(naturalFactors.length - 1, 1);
    return naturalFactors;
};
var getSumOfArray = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
var amicableNumbersSum = 0;

for (var i = 1; i < 10000; i++) {
    var naturalFactorsSum = getSumOfArray(getNaturalFactors(i));
    if (naturalFactorsSum != i) {
        var testI = getSumOfArray(getNaturalFactors(naturalFactorsSum));
        if (i == testI) {
            amicableNumbersSum += i;
            console.log('Amicable number found: ' + i);
        }
    }
}
document.write(amicableNumbersSum); <
/script>