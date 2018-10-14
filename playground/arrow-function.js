var square = x => x*x;
console.log(square(6));

var person = {
  name:'Tejas',
  sayHi: () => {
    console.log(`Hi. I am ${person.name}`);
  }
}
console.log(person.sayHi());
