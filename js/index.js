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
})