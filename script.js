//your JS code here. If required.
function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Initial Promise resolving after 3 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); 
    }, 3000);
  })
    // First transformation: filter even numbers
    .then((arr) => {
      const evens = arr.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = `[${evens}]`;
          resolve(evens);
        }, 1000); // 1 second delay before showing [2,4]
      });
    })
    // Second transformation: multiply by 2
    .then((evenNumbers) => {
      const multiplied = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          outputDiv.textContent = `[${multiplied}]`;
          resolve(multiplied);
        }, 2000); // 2 second delay before showing [4,8]
      });
    });
}

// Run the function when the page loads
manipulateArray();

