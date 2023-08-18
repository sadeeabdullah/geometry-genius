
function calculateTriangleArea(){
    const base = getValueById('base')
    const height = getValueById('height')
    const area = base*height*0.5;
    setText('area',area)
    addCalculationEntry('triangle',area)
}

