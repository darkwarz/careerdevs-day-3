
var numbers=[47, 22, 48, 22, 13, 85, 33, 19, 24, 36];

var minvalue = numbers[0]; 
for (var i = 0; i < numbers.length; i++) {
    if(numbers[i]<minvalue)
    {
        minvalue = numbers[i];
    }

}
  console.log(minvalue);