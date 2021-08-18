let object1 = {
    a:1,
    b:2,
    c:3,
    
};


console.log(object1);
let freezeObj = obj =>{
    for(let [key,value] of Object.entries(obj)){
        if(object1.hasOwnProperty(key)) {
            freezeObj(value);
        }
    }
    Object.freeze(obj);
    
}
freezeObj(object1);
let disc = Object.getOwnPropertyDescriptor(object1,"a");
console.log(disc);



