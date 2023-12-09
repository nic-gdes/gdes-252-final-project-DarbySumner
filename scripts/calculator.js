function convert () {
    // 1. get the value from the input
    const fahrenheit = parseInt(
        document.getElementById("fahrenheit").value
        );
   
    // 2. convert to celcius
    const celsius =  (fahrenheit - 32) * 0.5556;
   

    // 3. display number
    document.getElementById("celsius").innerText = celsius;
}


function convert () {
    // 1. get the value from the input
    const inches = parseInt(
        document.getElementById("inches").value
        );
   
    // 2. convert to centimeters
    const centimeters = inches / 0.39370;

    

    // 3. display number
    document.getElementById("centimeters").innerText = centimeters;
}


function convert () {
    // 1. get the value from the input
    const feet = parseInt(
        document.getElementById("feet").value
        );
   
    // 2. convert to meters
    const miles = feet * 0.00018939;
     
    console.log(miles);

    // 3. display number
    document.getElementById("miles").innerText = miles;
}