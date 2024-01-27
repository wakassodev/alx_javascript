#!/usr/bin/node
function callMe (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction()
  }
}
