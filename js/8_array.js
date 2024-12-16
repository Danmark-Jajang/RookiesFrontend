//map
let arr = [1, 2, 3, 4, 5];

function triple(data){
    console.log(`callback function called, original=${data}, changed=${data*3}`)
    return data*3;
}

//triple() 함수를 map()함수의 인자로 전달 -> 콜백함수
let res = arr.map(triple);
console.log(arr, res)

let res2 = arr.map(data=>{
    console.log(`callback function called, original:${data}/changed:${data*5}`);
    return data*5;
})
console.log(arr, res2);
// 서버로부터 데이터를 가져와 차트, 게시판등에 사용하기 위해 사용


//filter
// arr에서 값이 30이상인 데이터만 가져오기
// callback함수의 result가 boolean형으로 나와야한다
function cb(data){
    return data >= 3;
}

let res3 = arr.filter(cb);
console.log(arr, res3)

let res4 = arr.filter(data => data%2===0)
console.log(arr, res4)


//reduce
//이전 값과 연계해서 처리할 때(누적합, 누적곱, 통계, ...)
console.log(arr.reduce((pre, cur)=>pre+cur));

let ary = [`a`, `b`, `c`, `d`, `e`];
for(i in ary){
    console.log(i, ary[i]);
}

for(i of ary){
    console.log(i)
}

ary.forEach((value, index)=>{
    console.log(`index: ${index} / value: ${value}`);
});