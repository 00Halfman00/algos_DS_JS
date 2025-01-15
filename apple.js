const outer = {
  name: 'Dragon Fly Jones',
  first() {
    const second = () => {
      console.log(this.name);
    };
    second();
  },
};

// 8001
// idx = 3d
// lenght = 4
// length - idx - 1 = 0

outer.first();
