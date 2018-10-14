var fs = require('fs');

var obj = {
  name:'Tejas'
}
var stringObj=JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personObj = '{"name":"Tejas"}';
console.log(personObj.name);
var person=JSON.parse(personObj);
console.log(person);
console.log(person.name);

var originalObj = {
  title:'some title',
  body:'some body'
}
var originalObjString = JSON.stringify(originalObj);
fs.writeFileSync('notes.json',originalObjString);

var string=fs.readFileSync('notes.json');
var stringObj = JSON.parse(string);
console.log(stringObj.title); 
