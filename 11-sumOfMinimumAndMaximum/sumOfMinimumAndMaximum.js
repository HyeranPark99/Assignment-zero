function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var Max;
  var Min;
  var sum;

  // apply() method, you can write a method that can be used on different objects.
  Max = Math.max.apply(null, nums);
  Min = Math.min.apply(null, nums);

  sum = Max + Min;

  return sum;


}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;