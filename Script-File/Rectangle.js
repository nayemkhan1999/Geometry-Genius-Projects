function rectangleFunction (){
    // get Rectangle Width value ========>
    const rectangleWidth = document.getElementById('rectangle-width')
    const rectangleValue = rectangleWidth.value
    const inputWidth = parseFloat(rectangleValue)
    console.log(inputWidth);
    // get Rectangle Length Value ============>
        const rectangleLength = document.getElementById('rectangle-length')
        const lengthValue = rectangleLength.value
        const inputLength = parseFloat(lengthValue)
        console.log(inputLength);

    //get Calculate Area ==========>
        const area = inputWidth * inputLength
        console.log('Total:',area);
    
    // Display Calculate Area =========>
        const rectangleAria = document.getElementById('rectangle-Area')
       rectangleAria.innerText = area

}