// problem 1
function niilber(a, b, c) {
  let n = a + b + c;
  return n;
}
// let xa = Number(prompt("a too")), xb = Number(prompt("a too")), xc = Number(prompt("a too"));
// let hariu = niilber(xa,xb, xc)
// console.log(hariu);

//  Problem 2
function function1(x) {
  let y = 3 * x - 5;
  return y;
}

// last digit
function lastdigit(b) {
  let y = b % 10;
  return y;
}

// 2 orontoi toonii tsupruudiin urjver
function digitplus(a) {
  let x = a % 10;
  let y = (a - x) / 10;
  return x + y;
}

// 3 orontoi toonii tsipruudiin niilber
function digitmultiply3(x) {
  let a = x % 10;
  let b = ((x - a) / 10) % 10;
  let c = (x - a - b * 10) / 100;
  return a * b * c;
}

// sec to min
function secTomin(x) {
  let a = x % 60;
  let b = (x - a) / 60;
  return [b, a];
}
// const hariu = secTomin(320);
// console.log(hariu[0]+"-min", hariu[1]+"sec");

// hour min sec
function secTohour(x) {
  let c = Math.floor(x / 3600);
  let b = Math.floor((x - c * 3600) / 60);
  let a = (x - c * 3600) % 60;
  return [c, b, a];
}
// const hariu = secTohour(8123);
// console.log(hariu[0] + "-hour", hariu[1] + "min", hariu[2] + "-sec");

// a toonii b zereg
function degree(a, b) {
  let c = 1;
  for (let i = 0; i < b; i++) {
    c = c * a;
  }
  return c;
}
// let a=Number(prompt("number")), b=Number(prompt("degree"));
// const c=degree(a,b)
// console.log(c);

// Массивт байгаа эсэх
// function baigaaeseh(a=[], b){
//   let c=0;
//   for(let i=0; i<a.length; i++){
//     if(b==a[i]){
//         c=1;
//         break;
//     }
//   }
//   if(c===1) return "yes";
//   else return "no"
// }
// let A = [1, 2, 3, 4, 5];
// let b=4;

// RGB7090 - Шагай
// let k;
// k=prompt();
// let s=0;
// for(let i=0; i<=k; i++){
//   for(let j=0; j<=k; j++){
//     for(let l=0; i+j+l<=k; l++){
//       s++;
//     }
//   }
// }
// console.log(s);

//  RGB7603 - Супер жаал саад тойрон
//  let n, x, k;
//   n=prompt();
//   k=prompt();
//   let a=[], b=[];
//   a[0] = 1;

//   for (let i = 0; i <= n; i++){
//   b[n] = 0;
//   }
//   for (let i = 0; i < k; i++){
//   x=prompt();
//   b[x] = 1;
//   }
//   if (b[1] == 1)
//   a[1] = 0;
//   else
//   a[1] = a[0];
//   if (b[2] == 1)
//   a[2] = 0;
//   else
//   a[2] = a[1] + a[0];
//   for (let i = 3; i <= n; i++){
//   if (b[i] == 1)
//   a[i] = 0;
//   else
//   a[i] = a[i - 1] + a[i - 2] + a[i - 3];
//   }
//   console.log(a[n]);

// RGB7606 - Фибоначчийн n дахь гишүүн
// let n;
// n = prompt("n der utgaa ugnu uu");
// let f = [];
// f[1] = 1;
// f[0] = 1;`
// for (let i = 2; i < n; i++) {`
//   f[i] = f[i - 1] + f[i - 2];
// }
// console.log(f[n - 1]);

// RGB7702 - Бүжгийн хос
// const quickSort = arr => {
//   const a = [...arr];
//   if (a.length < 2) return a;
//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = a[pivotIndex];
//   const [lo, hi] = a.reduce(
//     (acc, val, i) => {
//       if (val < pivot || (val === pivot && i != pivotIndex)) {
//         acc[0].push(val);
//       } else if (val > pivot) {
//         acc[1].push(val);
//       }
//       return acc;
//     },
//     [[], []]
//   );
//   return [...quickSort(lo), pivot, ...quickSort(hi)];
// };

// let n,
//   a = [];
// for (let i = 0; i < n; i++) {
//   a[0] = prompt("-r huvguunii ur chadvar");
// }

// let m,
//   b = [];
// for (let i = 0; i < n; i++) {
//   b[0] = prompt(i + "-r ohinii ur chadvar");
// }
// let s = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     if (a[i] == b[j] - 1 || a[i] == b[j] || a[i] == b[j] + 1) {
//       s++;
//       b[j] = -1;
//     }
//   }  
// }
// console.log(a);

// let arr=[1, 3, 2, 4 , 5, 6, 7, 2];
// const filteredArray = arr.filter((element)=>element>2)
// console.log(filteredArray)
// const newArray = arr.map((element)=>element+2)
// console.log(newArray)
// const barr = newArray.filter((element)=>element>4)
// console.log(barr)
// console.log(arr.reduce((a, b) => a + b, 0))
// function read(n){
//   let a=[];
//   for(let i=0; i<n; i++){
//     a[i]=Number.prompt(i+"-r element")
//   }
//   return a;
// }
// let n;
// n=prompt("n=");
// let b = read(n);
// console.log(b)
// function fcapital(n){
  
//   let result = n.toLowerCase();
//  let a= result[0].toUpperCase();

//   let format = []

//   for(i=0; i<result.length; i++){
//     if(i==0){
//       format.push(a)
//     } 
//     else{

//       format.push(result[i])


//     }
//   }
  
//   return format.join("");
// }
// let na = "abCSDd";  
// let m = fcapital(na);
// console.log(m);


// leet code problems
// 11. Container With Most Water
let a=[1,8,6,2,5,4,8,3,7]
function maximum(a){
  let max=a[i];
  for(let i=1; i<a.legth; i++){
    if(a[i]>max){
      max=a[i];
    }
  }
  return max, i;
}

