function doSomething() {
  return 1123123;
}

function callMeMaybe(callback: () => void) {
  callback();
}

callMeMaybe(doSomething);
