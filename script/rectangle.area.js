
function calculateRectangleArea(){
    
    const length = getValueById('length');
    
    const width = getValueById('width');
    
    const area = length*width;
    setText('area1',area);
    addCalculationEntry('rectangle',area)
}