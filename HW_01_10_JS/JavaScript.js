function Rectangle(obj) {
    obj.desk.value = "";
    var a = obj.size_figure1.value;
    var b = obj.size_figure2.value;
    for (var i = 1; i <= a; i++) {
        for (var j = 1; j <= b; j++)
            obj.desk.value += '* ';
        obj.desk.value += '\n';
        
    }       
}
function Triangle(obj) {
    obj.desk1.value = "";
    var a = obj.size_figure.value;  
    for (var i =0; i < a/2; i++)
    {
        for (var j = a, k = 0; j > 0 && k < a; k++ , j--)
        {
            if (i > k || i >= j) {
                obj.desk1.value += ' ';
            }
            else {
                obj.desk1.value += '*';
            }
        }
        obj.desk1.value += '\n';
    }    
}
function Clock(obj) {
    obj.desk1.value = "";
    var a = obj.size_figure.value;
    for (var i = 0; i < a/2; i++)
    {
        for (var j = a, k = 0; j > 0 && k < a; k++ , j--)
        {
            if (i > k || i >= j) {
                obj.desk1.value += ' ';
            }
            else {
                obj.desk1.value += '*';
            }
        }
        if (i < ((a/2) - 1))
            obj.desk1.value += '\n';
    }    
    for (var i =a; i >= 0; i--)
    {
        for (var j = a, k = 0; j > 0 && k < a; k++ , j--)
        {
            if (i > k || i >= j) {
                obj.desk1.value += ' ';
            }
            else {
                obj.desk1.value += '*';
            }
        }        
        if (i < (a/2)+1)
            obj.desk1.value += '\n';
    }  
}
operand1;
operand2;
operation;
rez;

function Button1(obj) { obj.display.value += "1"; }
function Button2(obj) { obj.display.value += "2"; }
function Button3(obj) { obj.display.value += "3"; }
function Button4(obj) { obj.display.value += "4"; }
function Button5(obj) { obj.display.value += "5"; }
function Button6(obj) { obj.display.value += "6"; }
function Button7(obj) { obj.display.value += "7"; }
function Button8(obj) { obj.display.value += "8"; }
function Button9(obj) { obj.display.value += "9"; }
function Button0(obj) { obj.display.value += "0"; }
function ButtonPoint(obj) { obj.display.value += ",";}
function Operationplus(obj) {
    if (obj.display.value == "")
        operand1 = 0;
    else operand1 = +obj.display.value;    
    operation = "+";
    obj.display.value = "";
} function Operationminus(obj) {
    if (obj.display.value == "")
        operand1 = 0;
    else operand1 = +obj.display.value;   
    operation = "-";
    obj.display.value = "";
} function Operationdivide(obj) {
    if (obj.display.value == "")
        operand1 = 0;
    else operand1 = +obj.display.value;    
    operation = "/";
    obj.display.value = "";
} function Operationmult(obj) {
    if (obj.display.value == "")
        operand1 = 0;
    else operand1 = +obj.display.value;    
    operation = "*";
    obj.display.value = "";
}
function Rezult(obj) {
    if (obj.display.value == "")
        operand2 = 0;
    else operand2 = +obj.display.value;
    switch (operation) {
        case "+":
            rez = operand1 + operand2;
            obj.display.value = rez;
            break;
        case "*":
            rez = operand1 * operand2;
            obj.display.value = rez;
            break;
        case "-":
            rez = operand1 - operand2;
            obj.display.value = rez;
            break;
        case "/":
            if (operand2 == 0)
                obj.display.value = "Can not divide by zero!";
            else rez = operand1 / operand2;
            obj.display.value = rez;
            break;
    }
}
function ButtonClear(obj)
{
        operand1 = "";
        operand2 = "";
        operation = "";
    obj.display.value = "";
}
function ButtonClearE(obj)
{
    if (operation != 0) {
        operand2 = "";
        obj.display.value = "";
    }        
    else {
        operand1 = "";
        obj.display.value = "";        
    }
}
function Buttonpercent(obj)
{
        if ((operation == "+") || (operation == "-") || (operation == "/") || (operation == "*"))
            operand2 = +obj.display.value;
        var percent = (operand1 / 100) * operand2;
    switch (operation) {
        case '+':
            operand2 = percent;
            obj.display.value = operand2;
            break;
        case '-':
            operand2 = percent;
            obj.display.value = operand2;
            break;
        case '*':
            operand2 = (operand1 / 100);
            obj.display.value = operand2;
            break;
        case '/':
            if (operand2 == 0)
                obj.display.value = "Error!";
            else 
                operand2 = (operand1 / 100);
            obj.display.value = operand2;
                break;
            
    }
    
}
function Buttonsqrt(obj) {
    if ((operation == "+") || (operation == "-") || (operation == "/") || (operation == "*")) {
        operand2 = +obj.display.value;
        operand2 = Math.sqrt(operand2);
        obj.display.value = operand2;
    }
    else {
        operand1 = obj.display.value;
        operand1 = Math.sqrt(operand1)
        obj.display.value = operand1;
    }         
}
function Button1dividex(obj) {
    if ((operation == "+") || (operation == "-") || (operation == "/") || (operation == "*")) {
        operand2 = +obj.display.value;
        if (operand2 == 0)
            obj.display.value = "Can not divide by zero!";
        else {
            operand2 = 1 / operand2;
            obj.display.value = operand2;
        }
        
    }
    else {
        operand1 = obj.display.value;
        if (operand1 == 0)
            obj.display.value = "Can not divide by zero!";
        else {
            operand1 = 1 / operand1;
            obj.display.value = operand1;
        }
        
    }   
}
function ButtonSign(obj) {
    if ((operation == "+") || (operation == "-") || (operation == "/") || (operation == "*")) {
        operand2 = +obj.display.value;
        operand2 = -operand2;
        obj.display.value = operand2;
    }
    else {
        operand1 = obj.display.value;
        operand1 = -operand1;
        obj.display.value = operand1;
    }   
}
function List(n)
{  
    var el = document.getElementById(n);    
    if (el.style.display == "none") {
        el.style.display = "block";
    }

    else if (el.style.display == "block") {
        el.style.display = "none";   
    }
        
}