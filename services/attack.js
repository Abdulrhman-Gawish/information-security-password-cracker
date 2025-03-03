const fs = require("fs");
const path = require("path");

const PASSWORD = "gawish"; // Defined password

const dictionaryAttack = () => {
  try {
    const words = fs
      .readFileSync(path.join(__dirname, "../file.txt"), "utf-8")
      .split("\n");
    for (const word of words) {
      if (word.trim() === PASSWORD) {
        return word.trim();
      }
    }
  } catch (error) {
    return null;
  }
  return null;
};

const bruteForceAttack = () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const generateCombinations = (length, prefix = "") => {
    if (prefix.length === length) {
      return prefix === PASSWORD ? prefix : null;
    }
    for (let i = 0; i < chars.length; i++) {
      const result = generateCombinations(length, prefix + chars[i]);
      if (result) return result;
    }
    return null;
  };
  return generateCombinations(6);
};

module.exports = {
  bruteForceAttack,
  dictionaryAttack,
};
