const obj = {
  value: 10,

  regular: function () {
    console.log(this.value);
  },

  arrow: () => {
    console.log(this.value);
  },

  nested: function () {
    return () => {
      console.log(this.value);
    };
  }
};

obj.regular();
obj.arrow();
obj.nested()();