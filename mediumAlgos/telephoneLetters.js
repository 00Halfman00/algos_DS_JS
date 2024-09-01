const hashMap = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
];

const letterConbination = (digits) => {
  const res = [];
  if (!digits.length) return res;

  const tracker = (idx, path) => {
    if (path.length === digits.length) {
      res[res.length] = path.join('');
      return;
    }

    let letters = hashMap[digits[idx]];
    for (let letter of letters) {
      path[path.length] = letter;
      tracker(idx + 1, path);
      path.pop();
    }
  };
  tracker(0, []);
  return res;
};

const letterConbination2 = (digits) => {
  const res = [];
  if (digits[0]) {
    const tracker = (idx, path, path2) => {
      if (path[0].length === digits.length) {
        res[res.length] = path[0];
        return;
      }

        const letters = hashMap[digits[idx]];
        for (const letter of letters) {
          path[0] += letter;
          tracker(idx + 1, path);
          path[0] = path[0].slice(0, -1)
        }
    };
    tracker(0, ['']);
  }
  return res;
};

console.log(letterConbination ('23'));
