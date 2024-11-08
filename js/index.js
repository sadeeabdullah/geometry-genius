document.addEventListener("DOMContentLoaded", function() {
    // Declaring function for getting the Area of Triangle
function calculateTriangleArea(b, h) {
    const area = 0.5 * b * h;
    return area; 
  }
  
  function calculateRectangleArea(w, i) { // Fixed function name
    const area = w * i;
    return area;
  }
  function calculateEclipseArea(a, b) { // Fixed function name
    const area = 3.1416 *a * b;
    return area;
  }

  // function for calculating parallelogram area

  function calculateParallelogramArea(Pa,Pb) {
    const b = Number(Pa), h = Number(Pb);
    area = b * h ;
    console.log(area)
    return area;
  }
  
  // Triangle Area Calculation Event Listener
  document.getElementById('calculate-area').addEventListener('click', function() {
  
    // Fetch input values inside the event listener
    const b = parseFloat(document.getElementById('input-b').value);
    const h = parseFloat(document.getElementById('input-h').value);
    if (isNaN(b) || isNaN(h)) {
      return alert("Please type a valid number for both base and height");
    }
    
    // Call the function to calculate the area of the triangle
    const area = calculateTriangleArea(b, h);
  
    // Create or get the dialog
    let dialog = document.getElementById('result-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.style.borderRadius = '10px';
      dialog.style.width = '500px';
      dialog.id = 'result-dialog';
      document.body.appendChild(dialog);
    }
  
    // Set inner content for the dialog
    dialog.innerHTML = `
        <div class="p-6 bg-blue-600 shadow-lg mx-auto text-center">
            <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
            <p class="text-base text-white mb-6">The area of the triangle is: 
                <span class="font-semibold">${area} square cm</span>
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
      document.getElementById('input-b').value = '';
      document.getElementById('input-h').value = '';
    });
  });
  
  // Rectangle Area Calculation Event Listener
  document.getElementById('calculate-area-rectangle').addEventListener('click', function() {
  
    // Fetch input values inside the event listener
    const w = parseFloat(document.getElementById('input-w').value);
    const i = parseFloat(document.getElementById('input-i').value);
    if (isNaN(w) || isNaN(i)) {
      return alert("Please type a valid number for both width and height");
    }
    
    // Call the function to calculate the area of the rectangle
    const areaR = calculateRectangleArea(w, i);
  
    // Create or get the dialog
    let dialog = document.getElementById('result-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.style.borderRadius = '10px';
      dialog.style.width = '500px';
      dialog.id = 'result-dialog';
      document.body.appendChild(dialog);
    }
  
    // Set inner content for the dialog
    dialog.innerHTML = `
        <div class="p-6 bg-blue-600 shadow-lg mx-auto text-center">
            <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
            <p class="text-base text-white mb-6">The area of the rectangle is: 
                <span class="font-semibold">${areaR} cm<sup>2</sup></span>
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
      document.getElementById('input-w').value = '';
      document.getElementById('input-i').value = '';
    });
  });

  // eclipse area calculation event listener 
  // Rectangle Area Calculation Event Listener
  document.getElementById('calculate-area-eclipse').addEventListener('click', function() {
  
    // Fetch input values inside the event listener
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b-elcipse').value);
    console.log(a,b)
    if (isNaN(a) || isNaN(b)) {
      return alert("Please type a valid number for both width and height");
    }
    
    // Call the function to calculate the area of the rectangle
    const areaE = calculateEclipseArea(a, b);
    console.log(areaE)
  
    // Create or get the dialog
    let dialog = document.getElementById('result-eclipse-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.style.borderRadius = '10px';
      dialog.style.width = '500px';
      dialog.id = 'result-eclipse-dialog';
      document.body.appendChild(dialog);
    }
  
    // Set inner content for the dialog
    dialog.innerHTML = `
        <div class="p-6 bg-blue-600 shadow-lg mx-auto text-center">
            <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
            <p class="text-base text-white mb-6">The area of the rectangle is: 
                <span class="font-semibold">${areaE} cm<sup>2</sup></span>
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
      document.getElementById('input-a').value = '';
      document.getElementById('input-b-elcipse').value = '';
    })
  });

  
  document.getElementById('calculate-area-parallelogram').addEventListener('click',function(){
    console.log('button clicked from front')
    const b = document.getElementById("input-b-parallelogram").value
    const h = document.getElementById("input-h-parallelogram").value
    const area = calculateParallelogramArea(b, h)
    console.log(calculateParallelogramArea(b, h))

        // Create or get the dialog
        let dialog = document.getElementById('result-parallelogram-dialog');
        if (!dialog) {
          dialog = document.createElement('dialog');
          dialog.style.borderRadius = '10px';
          dialog.style.width = '500px';
          dialog.id = 'result-parallelogram-dialog';
          document.body.appendChild(dialog);
        }
      
        // Set inner content for the dialog
        dialog.innerHTML = `
            <div class="p-6 bg-blue-600 shadow-lg mx-auto text-center">
                <h3 class="text-lg font-bold text-white mb-4">Calculation Result</h3>
                <p class="text-base text-white mb-6">The area of the rectangle is: 
                    <span class="font-semibold">${area} cm<sup>2</sup></span>
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
      document.getElementById('input-a').value = '';
      document.getElementById('input-b-elcipse').value = '';
    })
  })
  
  

});  

  