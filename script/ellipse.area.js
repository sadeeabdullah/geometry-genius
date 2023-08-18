function calculateEllipseArea(){
   
    const ellipseFirstRadius = getValueById('ellipse-first-radius');
    const ellipseSecondRadius = getValueById('ellipse-second-radius');
    const π = 3.1416;
    const areaOfEllipses = π*ellipseFirstRadius*ellipseSecondRadius;
    const areaOfEllipse = areaOfEllipses.toFixed(2);
    if(isNaN(ellipseFirstRadius) || isNaN(ellipseSecondRadius)){
        alert('please type a number');
        ellipseFirstRadius ='';
        ellipseSecondRadius = '';
        return;
    }
    setText('area-ellipse',areaOfEllipse);
    addCalculationEntry('ellipse',areaOfEllipse)
}