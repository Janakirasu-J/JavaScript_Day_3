//function 

function arithmetic(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a % b);
  console.log(a / b);
}
arithmetic(10, 20);

//function retun

function retn(z, x) {
  return z + x;
}
console.log(retn(10, 89));

//function array

function arr(z, x) {
  return ["add", z + x, z * x, z - x, z % x];
}
console.log(arr(10, 89));

//function object

function obj1(y, u) {
  return {
    sum: y + u,
    sub: y - u,
    mult: y * u,
    div: y % u,
  };
}
console.log(obj1(10, 25));

//Normal Function

let res = [];

function evan(ar) {
  for (let i = 0; i <= ar.length - 1; i++) {
    if (ar[i] % 2 !== 0) {
      res.push(ar[i]);
    }
  }
  return res;
}
evan([1, 2, 3, 4, 5, 6, 7, 89]);
console.log(res);

//Annonyomus Function
let val = [];
let asy = function (odd) {
  for (let i = 0; i <= odd.length - 1; i++) {
    if (odd[i] % 2 === 0) {
      val.push(odd[i]);
    }
  }
  return val;
};
asy([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(val);

//IIFE Function
let val1 = []

(function (odd) {
  for (let i = 0; i <= odd.length - 1; i++) {
    if (odd[i] % 2 === 0) {
      val1.push(odd[i]);
    }
  }
  console.log(val1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

let result = [];
(function (arr) {
  for (var i = 0; i <= arr.length - 1; i = i + 1) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Arr Function

let ar = (a, b) => {
  return a + b;
};
console.log(ar(10, 30));

//Do While
let i = 1;
do {
  i += 1;
  console.log(i);
} while (i < 10);
let j = 0;
let k = 0;

//While

while (j < 3) {
  j += 1;
  k = +j;
}

