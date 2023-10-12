document.getElementById("btnConvert").addEventListener("click", function(){
    let temp= document.getElementById("numTemp").value;
     
     let toCelsius= document.getElementById("chkToCelsius").checked;
    // alert(temp);
     //alert(toCelsius);

     //process user's inputs
     //to celsius formula: (temperature - 32)/1.8
     //to fahrenheit formula: temperature * 1.8 + 32 
     //ternary statment

     let convert = toCelsius == true? (temp - 32)/1.8 : temp * 1.8 + 32;
     alert(convert)
});