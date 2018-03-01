module.exports = function check(str, bracketsConfig) {
  // your solution

  let str2 = str.split('');
  let stack = [];

  for (let i = 0; i < str2.length; i += 1) {
    for (let j = 0; j < bracketsConfig.length; j += 1) {
      if (bracketsConfig[j][0] === str2[i]) {
        stack.push(str2[i]);
      }
      if (bracketsConfig[j][1] === str2[i] && bracketsConfig[j][0] === stack[stack.length - 1]) {
        stack.pop()
      }
    }
  }
  return stack.length === 0;
}

