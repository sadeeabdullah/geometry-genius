// declaring fucntion for getting the Area of Triangle
function calculateTriangleArea(b,h) {
    const area = 0.5 * b * h;
    console.log(area)
    return area;
}

//Traversing button and inputs
const b = document.getElementById('input-b').value
const h = document.getElementById('input-h').value
document.getElementById('calculate-area').addEventListener('click',function(){
    console.log('hello clicked me')
    calculateTriangleArea(b,h);
    let dialouge = document.getElementById('result-dialouge')
    if(!dialouge){
      dialouge=document.createElement('dialog');
      dialouge.id = 'result-dialouge';
      document.body.appendChild(dialouge)
    }
    
    // Set inner content for the dialog
    dialouge.innerHTML = `
      <h3>Calculation Result</h3>
      <p>The area of the triangle is: ${calculateTriangleArea(b, h)}</p>
      <button id="close-dialog">Close</button>
    `;
    
    // Append the dialog to the body
    document.body.appendChild(dialouge);
    
    // Show the dialog
    dialouge.showModal();

    document.getElementById('close-dialog').addEventListener('click', function() {
        dialouge.close();
      });
})