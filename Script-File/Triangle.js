function triangleFunction (){
    // Get Triangle Base value ====================
    const triangleBase = document.getElementById('triangle-base')
    const inputBase = triangleBase.value
    // console.log(typeof(inputBase));
    const base = parseFloat(inputBase)
    console.log(base);

    // Get Triangle Height value=======================
    const triangleHeight = document.getElementById('triangle-height')
    const inputHeight = triangleHeight.value
    const height = parseFloat(inputHeight)
    console.log(height);  
    
    // Calculate Triangle Aria==================
    const area = 0.5 * base * height
    console.log(area);

    // Display Triangle Area==============
    const triangleArea = document.getElementById('areaSpen')
    triangleArea.innerText = area

}