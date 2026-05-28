// ==================== Triangle Function =========>
function triangleFunction (){
    // get Input Value collection ==>
    const triangleFirstInput = triangle('triangle-base')
    const triangleSecondInput = triangle('triangle-height')

    // get calculate ==>
        const calculateResult = 0.5 * triangleFirstInput * triangleSecondInput

    // Show the Display calculate Area =========>
    const showArea = showTheDisplay('areaSpen')
    showArea.innerText = calculateResult
}
// ========================= Rectangle Function ========>
    function rectangleFunction(){
        const rectangleFirstInput = rectangle('rectangle-width')
        const rectangleSecondInput = rectangle('rectangle-length')

        // get calculate rectangle Area ===>
            const calculateResult = rectangleFirstInput * rectangleSecondInput

        // Show The Result Rectangle Area =======>
            const showRectangleArea = showTheDisplay('rectangle-Area')
            showRectangleArea.innerText = calculateResult

    }