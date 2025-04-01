// PART 1 ----------------------
// let counter = 0;

// function increment() {
//   try {
//     counter += 1;
//     increment();
//   } catch (error) {
//     console.error("Error:", error);
//     console.log("Counter:", counter);
//   }
// }

// increment();

// PART 2 ----------------------

// // function flattenArray(parentArray) {
// //   parentArray.forEach((array) => {
// //     let flatArray = array.flat();
// //     flattenArray(flatArray);
// //   });
// // }

// const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// };

// function flattenArrayHelper(array, output = []) {
//   if (array.length === 0) {
//     return output;
//   }
//   let [first, ...rest] = array;
//   if (Array.isArray(first)) {
//     return () => flattenArrayHelper([...first, ...rest], output);
//   } else {
//     return () => flattenArrayHelper(rest, [...output, first]);
//   }
// }

// // Test-----------------
// let nestedArray = [1, [2, [3, [4, 5]], 6], 7];

// console.log(trampoline(flattenArrayHelper(nestedArray, (output = []))));

// PART 3 ----------------------

let textElement = document.createElement("h1");
let body = document.querySelector("body");
body.appendChild(textElement);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function addPrimesToElement(n, element) {
  const primes = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  element.innerHTML = `Prime numbers between 1 and ${n}: ${primes.join(", ")}`;

  setTimeout(function () {
    alert("Calculation is finished");
  }, 500);
}

// Test ------------------
console.log(addPrimesToElement(10000, textElement));
