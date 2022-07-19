var num=prompt("Enter the any numbers");
console.log("given number is:"+num)
console.log("reverse number in words:")
var temp=num;
var lastDigit;
var reverseNumber=0;
while(temp>0)
{
     lastDigit=temp%10;
     temp=temp-lastDigit;
     temp=temp/10;
     reverseNumber=(reverseNumber*10)+lastDigit;
     
     switch(lastDigit){
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        }

}
console.log("reverse number in numeric value")
console.log(reverseNumber);