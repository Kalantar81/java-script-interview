function Cat(color, name) {
    this.color = color;
    this.name = name;
}

// const cat = new Cat('black', 'KOT');
// console.log(cat);

// native realiosation of func() Cat in ES5
function myNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj;
}

const cat = myNew(Cat, 'black', 'KOT');
console.log(cat);