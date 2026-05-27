function parallelogramFunction (){
    // get Parallelogram Base Value
    const parallelogramBase = document.getElementById('parallelogram-base')
    const baseValue = parallelogramBase.value
    const base = parseFloat(baseValue)
    console.log(base);

     // get Parallelogram Height Value
    const parallelogramHeight = document.getElementById('parallelogram-height')
    const heightValue = parallelogramHeight.value
    const height = parseFloat(heightValue)
    console.log(height);

    // Get Calculate Parallelogram Area ===========>
        const parallelogramArea = base * height

    // Display The Result 
    const showResult = document.getElementById('parallelogram-Area')
    showResult.innerText = parallelogramArea
}