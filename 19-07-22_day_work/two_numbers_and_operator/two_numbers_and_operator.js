var a=parseInt(prompt("Enter a any number:"));
var b=parseInt(prompt("Enter a any number:"));
var c=prompt("Enter a any operator:");
switch(c)
{
    case '+': 
        console.log("Addition of ",a,"and",b);
        console.log((a+b));
        break;
    case '-':
        console.log("Subtraction of",a,"and",b);
        console.log((a-b));
        break;
    case '*' :
        console.log("Multiplication of",a,"and",b);
        console.log((a*b));
        break;
    case '/' :
        console.log("Division of",a,"and",b);
        console.log((a/b));
        break;
        
    }

