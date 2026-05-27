// input value function ========>
function getRhombusInputValue (inputValueById){
    const rhombusOne = document.getElementById(inputValueById)
    const rhombusValue = rhombusOne.value 
    const dOne = parseFloat(rhombusValue)
    return dOne
   
}
 // Display Set Inner Text Function =======>
    function setDisplayInnerText (elementId , area){
        const setInnerText = document.getElementById(elementId)
        setInnerText.innerText = area;
    }