//1


function sum(a,b){
     
     console.log(a+b);
}

sum(3,4);

//2
function leng(a){
    console.log(a.length);
}


leng("hello wor")


//3 
const a = [];

function ar(a){
    let s = 0;
   for(var i = 0; i<a.length ;i++){
       s = s + a[i];
   }
   console.log(s/a.length);
}

ar([1,2,3]);

//4 


function rev(b){
    const rev =[];
    for(var i = b.length; i>0 ;i--){
       rev.push(b[i]);
    }
    console.log(rev);
}

rev("rahul");


//5


function ev(a){

    if((a%2) == 0){

     console.log("even");
    }
    else{
        console.log("odd");
    }
}
ev(12);

//6

function lep(a){
    if(a % 4 == 0){
        console.log("leap year");
    }
    else{
        console.log("not a leap year");
    }
}

lep(2004);

//7
var  c = [];
function an(c){
    let b ="";
  for(let i = 0; i< c.length;i++){
       b = b + c[i];
  }
  console.log(b);
}
an(["hello","world"]);


//20
const func = (a) => {
    let ans = "";
    let mp = {};
    for (let i = 0; i < a.length; i++) {
      if (mp.hasOwnProperty(a[i])) continue;
      else {
        mp[a[i]] = 1;
        ans += a[i];
      }
    }
    return ans
  }
  
  console.log(func("abcdefabcdef"))

  //19

  const fnc = (a) => {
    return a.reduce((a,b) => a+b)
}

console.log(fnc([1,2,3,4,6]));

//18

const fu = (a) => {
    let sum = 0 ;
    a.forEach(i=>{
        sum += i*i
    })
    return sum
}

console.log(fu([1,2,3,4]))
