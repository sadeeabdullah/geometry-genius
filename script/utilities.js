function getValueById (elementId){
    const textField = document.getElementById(elementId);
    const textFieldValueString = textField.value;
    const textFieldValue = parseFloat(textFieldValueString);
    textField.value =''
    return textFieldValue;
    
}
function setText(elementId,newValue){
    const thePlace = document.getElementById(elementId);
    thePlace.innerText = newValue;
}



// add calculation to entry
/**
 * 1. get the element where you want the add the innerHtml.
 * 2. create a element you want to add.
 * 3. if needed add some class.
 * 4.set innerHtml.It could be dynamic template string.
 * 5. add the created element as child element to the parent element.
 */

function addCalculationEntry (areaType,area){
    console.log(areaType+ ' '+ area)
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-6')
    p.innerHTML =`${count + 1}. ${areaType} ${area} cm<sup>2</sup>  <button class="btn btn-success btn-sm">convert</button>`;
    calculationEntry.appendChild(p)


}







// data validation

/**
 * 1. set the proper type of in input field
 * 2. check the type using type of
 * 3. IsNaN to check not a number or not
 * 
 */