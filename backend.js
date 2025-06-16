const display = document.getElementById('display'); //lets get element 

function append(value){  // this function show append value on click button
    display.value += value;
}


function backspace(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(value){
    display.value = "";
}

    function calculate(){
        try{
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }