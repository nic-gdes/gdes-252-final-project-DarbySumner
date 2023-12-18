function convertFahrenheit () {
    // 1. get the value from the input
    const fahrenheit = parseInt(
        document.getElementById("numberInput").value
        );
   
    // 2. convert to celcius
    const celsius =  (fahrenheit - 32) * 0.5556;
    console.log(celsius)
   

    // 3. display number
    document.getElementById("solution").innerText = celsius;
}


function convertInches () {
    // 1. get the value from the input
    const inches = parseInt(
        document.getElementById("numberInput").value
        );
   
    // 2. convert to centimeters
    const centimeters = inches / 0.39370;
    console.log(centimeters);

    

    // 3. display number
    document.getElementById("solution").innerText = centimeters;
}


function convertFeet () {
    // 1. get the value from the input
    const feet = parseInt(
        document.getElementById("numberInput").value
        );
   
    // 2. convert to meters
    const miles = feet * 0.00018939;
     
    console.log(miles);

    // 3. display number
    document.getElementById("solution").innerText = miles;
}
