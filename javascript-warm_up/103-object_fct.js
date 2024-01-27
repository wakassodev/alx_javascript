#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function() {
  myObject.value += 1;
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

function formatObject(obj) {
  const formattedObject = JSON.parse(JSON.stringify(obj));
  if (formattedObject.incr && formattedObject.incr instanceof Function) {
    formattedObject.incr = '[Function]';
  }
  return formattedObject;
}