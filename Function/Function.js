//Javascript function in 4 Ways

//Default function
function rectangle(w, h) {
  return w * h;
}

//Function Expression
const rect = function(w, h) {
  return w * h;
};

//Function Arrow Expression

const rec = (w, h) => {
  return w * h;
};

//Concise Function Arrow Expression
const re = (w, h) => w * h;

console.log(rectangle);
console.log(rect);
console.log(rec(2, 3));
console.log(re(2, 3));
console.log(this.w);

const test = {
  name: "test object",
  createAnonFunction: function() {
    return function() {
      console.log(this.name);
      console.log(arguments);
    };
  },

  createArrowFunction: function() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  },
};
console.log(test.name);
console.log(test.createAnonFunction("hello", "world"));
console.log(test.createArrowFunction("hello", "world"));

// > anon();
// undefined
// {}

// > arrow();
// test object
// { '0': 'hello', '1': 'world' }
