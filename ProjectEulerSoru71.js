// Consider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.
// If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:
// 1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8
// It can be seen that 2/5 is the fraction immediately to the left of 3/7.
// By listing the set of reduced proper fractions for d ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.



var program = require('commander');

program
    .version('0.1.0')
    .description('Ordered fractions')
    .option('-l, --limit <int>', 'The maximum denominator', Number, 1000000)
    .parse(process.argv);

var RIGHT_FRAC = [3, 7];

var left_frac = [2, 7];
for (var d = 2; d <= program.limit; d++) {
    var start_n = Math.floor(left_frac[0] / left_frac[1] * d);
    var end_n = Math.floor(RIGHT_FRAC[0] / RIGHT_FRAC[1] * d) + 1;
    for (var n = start_n; n <= end_n; n++) {
        if (compare_fractions(n, d, RIGHT_FRAC[0], RIGHT_FRAC[1]) >= 0) {
            continue;
        }
        if (compare_fractions(n, d, left_frac[0], left_frac[1]) > 0) {
            left_frac = [n, d];
        }
    }
}

console.log(left_frac[0]);

function compare_fractions(numer1, denom1, numer2, denom2) {
    return numer1 * denom2 - numer2 * denom1;
}