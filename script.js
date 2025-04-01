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
