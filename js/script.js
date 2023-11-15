let number1 = document.querySelector("#input1")
let number2 = document.querySelector("#input2")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let multiplication = document.querySelector(".multiplication")
let division = document.querySelector(".division")
let equality = document.querySelector("equality")
let percentage  = document.querySelector (".percentage")
let output = document.querySelector (".output")
let clear = document.querySelector(".clear")
let todelete = document.querySelector(".delete")

      // Function to handle number button click
    //   function Click(number) {
    //     return function( ) {
    //         // Append the clicked number to the input field
    //          input1.value += number;
             
             
    //     };
    // }

    // // Add event listeners for number buttons
    // for (let i = 1; i <= 9; i++) {
    //     let button = document.getElementById("button" + i);
    //     button.addEventListener("click", Click(i));
    // }

// ===================

plus.addEventListener("click", function() {
    output.value = parseFloat(number1.value) + parseFloat(number2.value)
});
minus.addEventListener("click",function(){ 
    output.value = number1.value - number2.value
})

multiplication.addEventListener("click",function(){ 
    output.value = number1.value * number2.value
})

division.addEventListener("click",function(){ 
    output.value = number1.value / number2.value
})
percentage.addEventListener("click", function () {
    output.value = parseFloat(number1.value) % parseFloat(number2.value)
})
// period.addEventListener("click", function () {
//     output.value =  number1.value . number2.value
// })
clear.addEventListener("click",function(){
    output.value = ""
    number1.value = ""
    number2.value = ""
})
todelete.addEventListener("click",function(){
    output.value = ""
    number1.value = ""
    number2.value = ""
})