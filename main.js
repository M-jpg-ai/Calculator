num1=0;
num2=0;
operation="";
result=0;


function calculate(){
    num1=Number(document.getElementById("number1_input").value);
    num2 = Number(document.getElementById("number2_input").value);
    operation=document.getElementById("operation_input").value;

    //if condition
    if(operation=="+"){
        result=num1+num2;
        document.getElementById("results_lbl").innerHTML=result;
    }
    if(operation=="-"){
        result=num1-num2;
        document.getElementById("results_lbl").innerHTML=result;
    }
    if(operation=="*"|operation=="X"|operation=="x"){
        result=num1*num2;
        document.getElementById("results_lbl").innerHTML=result;
    }
    if(operation=="/"){
        result=num1/num2;
        document.getElementById("results_lbl").innerHTML=result;
    }

}