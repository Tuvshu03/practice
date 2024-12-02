// problem 1
// let a=2, b, c;
// b= 1;
// c= 3;

//  console.log(a+b+c);
//  Problem 2
// let x= 1;
// y=3*x-5;
// console.log(y);

// last digit
// let b= 476;
// let y= b%10;
// console.log(y)

// 2 orontoi toonii tsupruudiin urjver
// let a=27;
// let x=a%10;
// let y=(a-x)/10;
// console.log(x*y)

// 3 orontoi toonii tsipruudiin niilber
// let x= 987;
// let a= x%10;
// let b=(x-a)/10%10;
// let c=(x-a-b*10)/100;
// console.log(a+b+c)

// min sec
// let x= 200;
// let a= x%60;
// let b=(x-a)/60
// console.log(b)
// console.log(a)

// hour min sec
// let x=7261
// let a=x%3600
// let b, d=a;
// if(a>=60){
//     b=(a-(d%10))/60
// }
// else{
//     b=0
// }
// let c=(x-a)/3600
// console.log(c)
// console.log(b)
// console.log(a)

// a toonii b zereg
// let a=3, b=4, c=1
// for (let i=0; i<b; i++){
//     c=c*a
// }
// console.log(c)

// Массивт байгаа эсэх
// let A = [1, 2, 3, 4, 5]
// let b=3, console=0
// for(let i=0; i<5; i++){
//     if(b==A[i]){
//         console.log("Yes")
//         c=1
//         break
//     }

// }
// if(c==0){
//     console.log("No")
// }

// let a = 4,
//   s = 1;
// for (let i = 1; i < a; i++) {
//   s = s * i;
//   console.log(i + "!=", s);
// }
let n=8
let A = [1, 2, 3, 1, 1, 3, 1, 2]
let s=A[0]
for(let i=1; i<n; i++){
    for(let j=1; j<i; j++)
    if(A[j]+(A[j]+2)>=(A[j]+1)(A[j]+3)){

    }
}