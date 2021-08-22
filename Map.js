const map1=new Map();
console.log(map1);
map1.set('a',{phone:9413404837,name:"shivam singh"});
console.log(map1);
map1.set('b',{phone:9413404839,name:"shivam singh"});
map1.set('c',{phone:9413404828,name:"shubham singh"});
map1.set('d',{phone:9413404827,name:"shivam singh"});
map1.set('e',{phone:9413404836,name:"shivam singh"});

map1.forEach((val)=>{

    console.log(val);
})

console.log(map1.get('c'));
console.log(map1.size);


//object
console.log(map1.entries());
//keys in map
console.log(map1.keys());
console.log(map1.values());
