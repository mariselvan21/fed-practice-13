var num=parseInt(prompt("Enter the with in limit value"));
var sum=0;
for(i=1;i<=num;i++)
{
    if((i%3==0)||(i%5==0))
    {
       sum=sum+i;
    }
}
console.log("sum of divisible of 3 and 5 numbers with in limit",num,":",sum );