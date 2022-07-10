const obj1 = {
    soaps: {
        dettol: 17,
        lifebuoy: 20
    },
    detergent: {
        tide: 18
    },
    sampoo: {
        panteen: 23
    }
};

const obj2={...obj1,soaps.lifebuoy: 21,};

console.log(obj2);
console.log(obj1);