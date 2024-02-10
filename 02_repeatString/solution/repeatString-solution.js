const repeatString = function (phrase,count) {
if(count<0){
  return `error`
}
let str=""
for(let i=0;i<count;i++){
  str += phrase;
}
return str
};

module.exports = repeatString;
