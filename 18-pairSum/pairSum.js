function pairSum(nums, target) {
  // Insert code here;
  var boolean = false;

  if(nums.length <=1){
    throw 'the lengh of "nums"array is 1 or lower '
  }
  for(var i = 0; i < nums.length-1; i++){
    for(var j =1; j < nums.length; j++){
      if(nums[i]+nums[j] == target){
        boolean = true;
      }
    }
  }

  return boolean;
}

// Do not edit this line;
module.exports = pairSum;