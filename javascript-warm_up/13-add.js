#!/usr/bin/node
function add(a, b) {
  return function () {
    return (a) + (b)
  }
}
