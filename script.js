// PART 1 ----------------------
let counter = 0;

function increment() {
  try {
    counter += 1;
    increment();
  } catch (error) {
    console.error("Error:", error);
    console.log("Counter:", counter);
  }
}

increment();

// PART 2 ----------------------

// function flattenArray(parentArray) {
//   parentArray.forEach((array) => {
//     let flatArray = array.flat();
//     flattenArray(flatArray);
//   });
// }

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

function flattenArrayHelper(array, output = []) {
    if (array.length === 0) {
        return output;
    }
    let [first, ...rest] = array;
    if (Array.isArray(first)) {
        return () => flattenArrayHelper([...first, ...rest], output);
    } else {
        return () => flattenArrayHelper(rest, [...output, first]);
    }
}


// Test-----------------
let nestedArray = [1, [2, [3, [4, 5]], 6], 7];

console.log(trampoline(flattenArrayHelper(nestedArray, output = [])));
