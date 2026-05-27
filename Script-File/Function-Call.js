function callFunction (){
//    get Rhombus D1 value ============>
    const rhombusD1 = getRhombusInputValue('rhombus-dOne')
    console.log('base-value',rhombusD1);
    //  get Rhombus D2 value =============>
    const rhombusD2 = getRhombusInputValue('rhombus-dTwo')
    console.log('D2 valued', rhombusD2);
    // calculate The area ==========>
        const areaResult = rhombusD1 * rhombusD2

    // Display show the inner Text===============>
    setDisplayInnerText('rhombus-Area', areaResult)

   
}
