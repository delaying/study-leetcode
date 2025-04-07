// const symbol: { [key: number]: string } = {
//   1000: "M",
//   900: "CM",
//   500: "D",
//   400: "CD",
//   100: "C",
//   90: "XC",
//   50: "L",
//   40: "XL",
//   10: "X",
//   9: "IX",
//   5: "V",
//   4: "IV",
//   1: "I",
// };

const symbol = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

function intToRoman(num: number): string {
  const keys = Object.keys(symbol).reverse();
  let numValue = num;
  let result = "";

  for (const key of keys) {
    const value = Number(key);

    while (numValue >= value) {
      if (String(numValue).startsWith("4")) {
        result += symbol[value];
        result += symbol[value * 5];
        numValue -= value * 4;
        continue;
      }

      if (String(numValue).startsWith("9")) {
        result += symbol[value / 5];
        result += symbol[value * 2];
        numValue -= value * 2 - value / 5;
        continue;
      }

      result += symbol[value];
      numValue -= value;
    }
    if (numValue === 0) break;
  }

  return result;
}

console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(1994)); // "MCMXCIV"
console.log(intToRoman(58)); // "LVIII"
