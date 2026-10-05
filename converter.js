function convertTemperature(){

    const temperature =
        parseFloat(
            document.getElementById("temperature").value
        );

    const fromUnit =
        document.getElementById("fromUnit").value;

    const toUnit =
        document.getElementById("toUnit").value;

    const output =
        document.getElementById("output");

    if(isNaN(temperature)){

        output.value = "Enter valid number";

        return;
    }

    let result;

    if(fromUnit === toUnit){

        result = temperature;
    }

    else if(
        fromUnit === "celsius" &&
        toUnit === "fahrenheit"
    ){

        result = (temperature * 9/5) + 32;
    }

    else if(
        fromUnit === "fahrenheit" &&
        toUnit === "celsius"
    ){

        result = (temperature - 32) * 5/9;
    }

    else if(
        fromUnit === "celsius" &&
        toUnit === "kelvin"
    ){

        result = temperature + 273.15;
    }

    else if(
        fromUnit === "kelvin" &&
        toUnit === "celsius"
    ){

        result = temperature - 273.15;
    }

    else if(
        fromUnit === "fahrenheit" &&
        toUnit === "kelvin"
    ){

        result =
            (temperature - 32) * 5/9 + 273.15;
    }

    else if(
        fromUnit === "kelvin" &&
        toUnit === "fahrenheit"
    ){

        result =
            (temperature - 273.15) * 9/5 + 32;
    }

    output.value = result.toFixed(2);
}