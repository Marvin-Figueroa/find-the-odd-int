function solution(array) {
  if (array.length === 1) return array[0];

  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.get(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }

  for (let key of map.keys()) {
    if (map.get(key) % 2 !== 0) return key;
  }
}

module.exports = solution;
