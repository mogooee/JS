class HashTable {
  constructor(mapSize = 17) {
    this.mapSize = mapSize;
    this.keyMap = new Array(mapSize);
  }

  hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  put(key, value) {
    const index = this.hash(key);
    this.keyMap[index]
      ? this.keyMap[index].push([key, value])
      : (this.keyMap[index] = [[key, value]]);
    return this.keyMap;
  }
  containsKey(key) {
    const index = this.hash(key);
    return this.keyMap[index] ? true : false;
  }
  get(key) {
    const index = this.hash(key);
    let value;
    if (this.containsKey(key)) {
      this.keyMap[index].forEach((arr) => {
        if (arr[0] === key) {
          value = arr[1];
        }
      });
    }
    return value;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.containsKey(key)) {
      this.keyMap[index].forEach((arr, i) => {
        if (arr[0] === key) {
          delete this.keyMap[index].splice(i, 1);
        }
      });
    }
    return this.keyMap;
  }

  replace(key, value) {
    const index = this.hash(key);
    this.keyMap[index].forEach((arr, i) => {
      if (arr[0] === key) {
        this.keyMap[index][i][1] = value;
      }
    });
    return this.keyMap;
  }

  keys() {
    let keysArr = [];
    this.keyMap.forEach((e) => {
      e.forEach((el) => {
        keysArr.push(el[0]);
      });
    });
    return keysArr;
  }

  values() {
    let valuesArr = [];
    this.keyMap.forEach((e) => {
      e.forEach((el) => {
        if (!valuesArr.includes(el[1])) {
          valuesArr.push(el[1]);
        }
      });
    });
    return valuesArr;
  }

  size() {
    return this.keys().length;
  }

  isEmpty() {
    const empty = new Array(this.mapSize);
    return JSON.stringify(empty) === JSON.stringify(this.keyMap) ? true : false;
  }

  clear() {
    this.keyMap = new Array(this.mapSize);
    return this.keyMap;
  }
}

const Hash = new HashTable();

console.log(Hash.isEmpty());

Hash.put("hello", "world");
Hash.put("beautiful", "world");
Hash.put("hi", "bye");
Hash.put("good", "morning");
Hash.put("i'm fine thank you", "and you?");

console.log(Hash.get("i'm fine thank you"));
console.log(Hash.get("ou"));

console.log(Hash.containsKey("i'm fine thank you"));
console.log(Hash.containsKey("ou"));

console.log(Hash.isEmpty());

console.log(Hash.keys());
console.log(Hash.values());

console.log(Hash.size());

console.log(Hash.remove("i'm fine thank you"));
console.log(Hash.replace("good", "night"));

console.log(Hash.clear());
console.log(Hash.isEmpty());
