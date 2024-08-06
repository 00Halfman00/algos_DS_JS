/*
  CREATE HASHING FUNCTION
    1.  IT WILL TAKE A KEY(STRING) AND LENGTH OF ARRAY AS ITS PARAMETERS
    2.  IT WILL USE A PRIME NUMBER FOR CALCULATING HASH VALUE
    3.  IT WILL LOOP AS FOR THE LENGTH OF THE KEY OR DEFAULT NUMBER TO LIMIT LENGHT OF LOOP
    4.  IT WILL MODULO OPERATOR TO GRAB THE CALCULATED VALUE AND MOD BY THE LENGTH OF ARRAY
        TO GET AN INDEX BETWEEN ZERO AND LENGTH OF ARRAY
*/

//const hashArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// const hashArr = Array.from({ length: 31 }, () => []);

// const hashF = (key, length = hashArr.length) => {
//   const prime = 37;
//   let total = 0;
//   const num = key.length <= 100 ? key.length : 100;

//   for (let i = 0; i < num; ++i) {
//     total += key[i].charCodeAt(0) * prime;
//   }

//   return total % length;
// };

// const hash = (key, value) => {
//   console.log('hashArr.length: ', hashArr.length);
//   const idx = hashF(key);
//   const arr = hashArr[idx];
//   arr[arr.length] = value;
//   return { idx: idx, value: value };
// };

const HashTable = class {
  constructor() {
    this.keyMap = Array.from({ length: 31 }, () => []);
  }

  _hash(key) {
    const prime = 37;
    let total = 0;
    const num = key.length <= 100 ? key.length : 100;
    for (let i = 0; i < num; ++i) {
      total += key[i].charCodeAt(0) * prime;
    }
    return total % this.keyMap.length;
  }

  set(key, value) {
    const idx = this._hash(key);
    this.keyMap[idx][this.keyMap[idx].length] = [key, value];
    return { idx: idx, value: value };
  }

  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx][0]) {
      for (let i = 0; i < this.keyMap[idx].length; ++i) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i][1];
        }
      }
    }
    // undefined will be returned by default
  }

  keys() {
    const res = [];
    if (this.keyMap[0]) {
      for (let i = 0; i < this.keyMap.length; ++i) {
        if (this.keyMap[i][0]) {
          for (let j = 0; j < this.keyMap[i].length; ++j) {
            res[res.length] = this.keyMap[i][j][0];
          }
        }
      }
    }
    return [...new Set(res)];
  }

  values() {
    const res = [];
    if (this.keyMap[0]) {
      for (let i = 0; i < this.keyMap.length; ++i) {
        if (this.keyMap[i][0]) {
          for (let j = 0; j < this.keyMap[i].length; ++j) {
            res[res.length] = this.keyMap[i][j][1];
          }
        }
      }
    }
    return res;
  }
};

const myHT = new HashTable();

// so we have an array, key, and index to store key
console.log(myHT.set('red', 'one'));
console.log(myHT.set('white', 'two'));
console.log(myHT.set('blue', 'three'));
console.log(myHT.set('green', 'four'));
console.log(myHT.set('orange', 'five'));
console.log(myHT.set('yellow', 'six'));
console.log(myHT.set('purple', 'seven'));
console.log(myHT.set('brown', 'eight'));
console.log(myHT.set('rojo', 'nine'));
console.log(myHT.set('blacon', 'ten'));
console.log(myHT.set('azul', 'eleven'));
console.log(myHT.set('verde', 'twelve'));
console.log(myHT.set('naranjado', 'thirteen'));
console.log(myHT.set('amarillo', 'fourteen'));
console.log(myHT.set('morado', 'fifteen'));
console.log(myHT.set('cafe', 'sixteen'));

console.log('hasArr: ', myHT.keyMap);
// console.log('the value for myHT.get("blue"): ', myHT.get('blue')); // three
// console.log('the value for myHT.get("rojo"): ', myHT.get('rojo')); // nine
// console.log('the value for myHT.get("black"): ', myHT.get('black')); // undefined
console.log(myHT.keys());
console.log(myHT.values());
