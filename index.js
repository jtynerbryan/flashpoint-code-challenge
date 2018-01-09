// Flashpoint Coding Challenge

// Does Javascript pass parameters by value or by reference?

// Answer:
// In JavaScript, parameters are always passed by value. But when a variable that's passed is an Object, the value that's passed is a reference to the object, not the object itself. It's possible to modify the contents of an object, but attempting to overwrite a variable never changes the underlying object or primitive. The variable would then be pointed to a new object or primitive.

// Some examples:

let obj = { key: 'value' };

function attemptToOverwrite(obj) {
  obj = {};
  // the original obj is inchanged
}

function changeContents(obj) {
  object.key = 'new value';
  // object contents have been modified
}

// Q: What is the result of the following code?

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// Answer: Running this code results in "Index: 4, element: undefined" being printed to the console 4 times. setTimout() belongs to a Web API provided by the browser, and because of this when it's time to be exectued it's removed from the call stack in the event loop and moved to a callback queue, which then waits for everything else in the stack to be executed. Once the stack is empty, the code inside setTimout() can finally be exectued. Even if you changed the timer from 3000 to 0, the order of results would be the same.
//
// This is happening because setTimout() is unable to stop the executation of the for loop, and the for loop is has completed before the anonymous function inside setTimout() can be run.
//
// The last index (4) is printed because setTimout() has access to i, but arr is outside it's scope and thus a[i] always results in undefined.

// Q: How would you compare Objects in JavaScript?

// A: It depends on if you want to check the equality of the properties and values of two distinct objects, or if you want to check if two variables refer to the same instance

// If you want to check if two variables refer to the same instance:

let obj = { key: 'value' };

let sameObj = obj;

// Outputs: true
obj === sameObj;

// Checking the equality of key/value pairs in two distinct objects takes some more work:

function isEquivilant(a, b) {
  // first let's check that the length of Object.keys() is the same, if they're not we know and b are not isEquivilant

  let aKeys = Object.keys(a);

  let bKeys = Object.keys(b);

  if (akeys.length !== bKeys.length) {
    return false;
  }

  // if we've passed that test, let's iterate over the keys of a and compare compare the values at each key in both objects

  for (let i = 0; i < akeys.length; i++) {
    let key = akeys[i];

    if (a[key] !== b[key]) {
      return false;
    }
  }

  // if all the values match return true
  return true;
}

// This will only work for objects that are simply and neatly constructed, and won't be able to handle things like:
// 1. If a value of one of the keys is an object
// 2. If a value of one of the keys is NaN (not equal to itself)
// 3. a has a property with value of undefined, while b doesn't have that key resulting in undefined (returns true when there isen't a match)

// Ultimately I wouldn't trust isEquivilant() and would instead rely on .isEqual(a, b) in the Lo-Dash library which can handle deeper object value comparisons
