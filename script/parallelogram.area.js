function calculateParallelogramArea(){

    const baseValue = getValueById('base-paralellogram');
    const heightValue = getValueById('height-paralellogram');
    const  areaOfParallegram = baseValue * heightValue;
    
    setText('area3',areaOfParallegram);
    addCalculationEntry('parallelogram',areaOfParallegram)
}