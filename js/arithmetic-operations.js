// Addition
const add = (...numbers) => {
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
  }
  return result;
};