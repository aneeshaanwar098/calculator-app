function doSum(event) {
    event.preventDefault();

    console.log("function is running");

    let Num1 = document.querySelector("#Num1").value;
    let Num2 = document.querySelector("#Num2").value;

    console.log(Num1)
    console.log(Num2)
    
    let result = Number(Num1) + Number(Num2);
    
    console.log(result);

    let resultMessage = `sum of ${Num1} and ${Num2} = ${result}`;
    document.querySelector("#resultWindow").innerHTML=resultMessage
}