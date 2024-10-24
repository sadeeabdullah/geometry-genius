// Declaring function for getting the Area of Triangle
function calculateTriangleArea(b, h) {
  const area = 0.5 * b * h;
  return area; 
}

// Traversing button and inputs
document.getElementById('calculate-area').addEventListener('click', function() {
  console.log('Button clicked');

  // Fetch input values inside the event listener
  const b = parseFloat(document.getElementById('input-b').value);
  const h = parseFloat(document.getElementById('input-h').value);

  // Call the function to calculate the area
  const area = calculateTriangleArea(b, h);

  // Create or get the dialog
  let dialog = document.getElementById('result-dialog');
  if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'result-dialog';
      document.body.appendChild(dialog);
  }

  // Set inner content for the dialog
  dialog.innerHTML = `
      <div class="p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto text-center">
          <h3 class="text-lg font-bold text-gray-700 mb-4">Calculation Result</h3>
          <p class="text-base text-gray-600 mb-6">The area of the triangle is: 
              <span class="font-semibold">${area}</span>
          </p>
          <button id="close-dialog" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
          </button>
      </div>
  `;
  
  // Show the dialog
  dialog.showModal();

  document.getElementById('close-dialog').addEventListener('click', function() {
      dialog.close();
  });
});
