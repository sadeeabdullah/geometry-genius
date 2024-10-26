// Declaring function for getting the Area of Triangle
function calculateTriangleArea(b, h) {
  const area = 0.5 * b * h;
  return area; 
}

function calculateRectangleAre(w,i) {
    const area = w * i;
    return area;
}

// Traversing button and inputs
document.getElementById('calculate-area').addEventListener('click', function() {

  // Fetch input values inside the event listener
  const b = parseFloat(document.getElementById('input-b').value);
  const h = parseFloat(document.getElementById('input-h').value);
  if (isNaN(b) || isNaN(h)) {
    return alert("Please type a valid number for both base and height");
  }

  // Call the function to calculate the area
  const area = calculateTriangleArea(b, h);
  // Fetch input values inside the event listener
  const w = parseFloat(document.getElementById('input-b').value);
  const i = parseFloat(document.getElementById('input-h').value);
  if (isNaN(w) || isNaN(i)) {
    return alert("Please type a valid number for both base and height");
  }

  // Call the function to calculate the area
  const areaR = calculateRectangleAre(w,i);

  // Create or get the dialog
  let dialog = document.getElementById('result-dialog');
  if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.style.borderRadius='10px'
      dialog.style.width='500px'
      dialog.id = 'result-dialog';
      document.body.appendChild(dialog);
  }

  // Set inner content for the dialog
  dialog.innerHTML = `
      <div class="p-6 bg-blue-600  shadow-lg  mx-auto text-center">
          <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
          <p class="text-base text-white mb-6">The area of the triangle is: 
              <span class="font-semibold">${area} square cm</span>
          </p>
          <button id="close-dialog" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
          </button>
      </div>
  `;
  // Set inner content for the dialog
  dialog.innerHTML = `
      <div class="p-6 bg-blue-600  shadow-lg  mx-auto text-center">
          <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
          <p class="text-base text-white mb-6">The area of the triangle is: 
              <span class="font-semibold">${areaR} square cm</span>
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
      document.getElementById('input-b').value = ''
      document.getElementById('input-h').value=''
  });
});
