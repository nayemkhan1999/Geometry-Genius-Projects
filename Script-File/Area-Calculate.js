// Triangle Function =========>
    function triangle(triangleValue){
        const triangleInputValue = document.getElementById(triangleValue)
        const inputValue = triangleInputValue.value
        const base = parseFloat(inputValue)
        return base 
    }
    // Show The Display Area Calculate ===========>
    function showTheDisplay(display,area){
        const showText = document.getElementById(display,area)
        showText.innerText = area
        return showText

    }