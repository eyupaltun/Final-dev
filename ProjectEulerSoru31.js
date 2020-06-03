// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?


var coinValues = [1, 2, 5, 10, 20, 50, 100, 200];

var comboCounts = [];
for (var i = 0; i < coinValues.length; i++) {
    comboCounts[i] = [];
}

var findDifferentCoinCombos = function(amount, maxIndex) {
    var combos = 0;


    maxIndex = (maxIndex || maxIndex == 0) ? maxIndex : coinValues.length - 1;

    if (maxIndex == 0 || amount == 0) {
        return 1;
    }

    if (comboCounts[maxIndex][amount]) {
        return comboCounts[maxIndex][amount];
    }


    var coinValue = coinValues[maxIndex];
    var coinAmount = 0;
    while (amount >= coinAmount) {
        combos += findDifferentCoinCombos(amount - coinAmount, maxIndex - 1);
        coinAmount += coinValue;
    }


    comboCounts[maxIndex][amount] = combos;


    return combos;
};

console.log(findDifferentCoinCombos(200)); <