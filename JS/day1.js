// Event trvels both 1. Capturing then return 2. Bubbling thats why we can only see bubbling first because it is the return value.

const child = document.querySelector("#child");
const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");


// Event Bubbling - bottom to top (default)
/*
child.addEventListener('click',()=>{
    console.log("Child");
    
})
grandParent.addEventListener('click',()=>{
    console.log("Grand Parent");
    
})
parent.addEventListener('click',()=>{
    console.log("Parent");
    
})

*/

// Event Capturing - add true top - bottom
child.addEventListener('click',()=>{
    console.log("Child");
    
},true)
grandParent.addEventListener('click',()=>{
    console.log("Grand Parent");
    
},true)
parent.addEventListener('click',()=>{
    console.log("Parent");
    
},true)
