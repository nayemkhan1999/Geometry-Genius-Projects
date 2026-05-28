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
    // =============== Parallelogram Function ============>
        function parallelogramFunction(){
            const parallelogramFirstInput = parallelogram('parallelogram-base')
            const parallelogramSecondInput = parallelogram('parallelogram-base')
            // Get Calculate Parallelogram Area ==>
            const calculateResult = parallelogramFirstInput * parallelogramSecondInput
            // Show The Result Parallelogram Display ==>
            const showParallelogramArea = showTheDisplay('parallelogram-Area')
            showParallelogramArea.innerText = calculateResult
        }
    // ========================== Rhombus Function ==========================>
        function rhombusFunction (){
            const rhombusFirstInput = rhombus('rhombus-dOne')
            const rhombusSecondInput = rhombus('rhombus-dTwo')
            // get the calculate Rhombus ==>
                const calculateRhombus = 0.5 * rhombusFirstInput * rhombusSecondInput
            // Get The Result And Show the Display ==>
                const showRhombusArea = showTheDisplay('rhombus-Area')
                showRhombusArea.innerText = calculateRhombus

        }