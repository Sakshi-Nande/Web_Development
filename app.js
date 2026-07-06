// let btn=document.querySelector('button');
// // btn.onmouseenter=print;
// // // btn.onclick=function(){
// // //     console.log("Helloooooooo");
// // // }



// // function print(){
// //     console.log("entered");
// // }

// btn.addEventListener("click",function(){
//     console.log("this");
//     this.style.backgroundColor="blue";
// });

let btn= document.querySelector("button");
let inp=document.querySelector("input");
let lis=document.querySelector("ul");

console.dir(lis);

btn.addEventListener("click", function()
{
    let task=inp.value;
    lis.innerHTML=`${lis.innerHTML}<ul>${task}</ul>`;
});