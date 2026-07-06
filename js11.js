/*

console.log("hii sakshi")
let a=10;
let b=5;
console.log(`The total price is:${a+b} Rupees`);

console.log("helloo")
//let msg=prompt("enter your name:");
//console.log(msg.trim());

const student={
    name:"sakshi",
    age:21,
    marks:96.20
}

const classInfo={
    sakshi:{
        name:"sakshi",
        age:"21",
        marks:"96.20"
    },
    mummy:{
        name:"dhanashri",
        age:45,
        marks:89.50
    }
};

function print(){
    console.log("HEllo sakshi");

}

print();

function add(a,b){
    console.log(`Sum of ${a} and ${b} is :${a+b}`);
}

add(20,45);

function add(a,b){
    return a+b;
}

console.log(add(46,23));

function demo(func,count){
    for(let i=0;i<count;i++){
        func();
    }
}

const func=function(){
    console.log("HII sakshi");
}
demo(func,5);


const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}

try{
    console.log(sakshii);
}
catch(err){
    console.log(err);
    console.log("Caught an error");
}

const funct=()=>{
    console.log("hii");
}

//implicit return
const demoo=(a,b)=>(a+b);

const demof=(a,b)=>{
    console.log(`sum is ${a+b}`);
}

//settimeout

setTimeout(()=>{
    console.log("SAKSHUU");
},4000);

//setinterval

let id=setInterval(()=>{
    console.log("SANJAY");
},2000);

//clearInterval(id);

const stu={
    name:"sakshi",
    marks:96.20,
    prompt:this,
    getName:function(){
        console.log(this);
        return this.name;
    },
    getm:()=>{
        console.log(this);
        return this.marks;
    }
};



//Array methods 
// 1: forEach
let arr=[10,20,30,4,5];
let print=function(el){
    console.log(el);
}

//print by calling already created function each time
arr.forEach(print);

//printing function inside forEach
arr.forEach((el)=>{
    console.log(el)
});

// 2: map

let arr1=[1,2,3,4,5];

let double=arr1.map((el)=>{
    return el*2;
});

console.log(double);


//3: filter 

let arr=[1,2,3,4,5,6,7,8];
let even=arr.filter((el)=>{
    return el%2==0;
});

console.log(even);

//every 

let arr1=[1,2,3,4,5];

console.log(arr1.every((el)=>(el%2==0)));

//some

console.log(arr1.some((el)=>(el%2==0)));

//reduce 

let sum= arr1.reduce((res,el)=>{
    return res+el;
});

console.log(sum);

// using reduce finding maximum number in an array 

arr2=[1,6,2,7,9,4,27,0,33,8,4,8];

let max= arr2.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
});

console.log(max);



//default parameters

function sum(a,b=10){
    console.log(a+b);
}

sum(30);


//rest

function sum(...args){
    return args.reduce((s,el)=>s+el);
}

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6,7));



// callback hell

let h1 = document.querySelector("h1");

function changeColor(color,delay,nextc){
    setTimeout(() => {
        h1.style.color=color;
        if(nextc) nextc();
     },delay);

}

changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("green",1000);
        });
    });
});


// promises

function savetoDb(data){
    return new Promise((success,failure)=>{
        let is= Math.floor(Math.random()*10)+1;

        if(is>5){
            success("success");
        }
        else{
            failure("failure");
        }

    });
}
   

// promise chaining 

savetoDb("Sakshi Nande")
    .then(()=>{
        console.log("data 1 saved");
        return savetoDb("sanjay ");
    })
    .then(()=>{
        console.log("data 2 saved");
        return savetoDb("dhanashri");
    })
     .then(()=>{
        console.log("data 3 saved");
    })
    .catch(()=>{
        console.log("Error occurred");
    })



    //color change 
    let h1=document.querySelector("h1");

    function colorChange(color, delay)
    {
        return new Promise((resolve,reject)=>
        {
            
                setTimeout(()=>{
                 h1.style.color=color;
                resolve("color changed");
                },delay);

           
        });
        
    }

    colorChange("red",1000)
    .then(()=>{
        return colorChange("blue",1000);
    })
     .then(()=>{
        return colorChange("green",1000);
    })
     .then(()=>{
        return colorChange("pink",1000);
    })
     .then(()=>{
        return colorChange("yellow",1000);
    })
     .then(()=>{
        return colorChange("violet",1000);
    })
    
    //async function

    async function demo(){
        return "hello";
    }

    let demo2 = async () =>{ return "Sakshi";};

        */

    //colorChange using await

    let h1=document.querySelector("h1");
    function colorChange(color,delay){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                h1.style.color=color;
            resolve();
            },delay);

        })
    }

    async function demo(){
        await colorChange("red",1000);
        await colorChange("violet",1000);
        await colorChange("blue",1000);
        await colorChange("yellow",1000);
         await colorChange("pink",1000);
    }