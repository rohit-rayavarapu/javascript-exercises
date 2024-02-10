const repeatString = function(text,val) {
if(val<0) return `Error`
let str = ""
for(let i=0;i<val;i++){
    str+=text
}
return str;
};

repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
