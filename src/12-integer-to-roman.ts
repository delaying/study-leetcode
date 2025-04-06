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
  let result = "";

  for (const key of keys) {
    const value = Number(key);

    while (num >= value) {
      if (String(num).startsWith("4")) {
        result += symbol[value];
        result += symbol[value * 5];
        num -= value * 4;
        continue;
      }

      if (String(num).startsWith("9")) {
        result += symbol[value / 5];
        result += symbol[value * 2];
        num -= value * 2 - value / 5;
        continue;
      }

      result += symbol[value];
      num -= value;
    }
    if (num === 0) break;
  }

  return result;
}

console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(1994)); // "MCMXCIV"
console.log(intToRoman(58)); // "LVIII"
