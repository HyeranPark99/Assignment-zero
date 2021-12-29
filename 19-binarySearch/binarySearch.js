class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    var mid = Math.floor(nums.length/2);

    if(nums[mid]> target){
      var newNums = nums.slice(0,mid);
      return this.binarySearch(newNums, target);
    }else if(nums[mid]< target){
      var newNums = nums.slice(mid+1, nums.length);
      return this.binarySearch(newNums, target);
    }else if(nums[mid] == target){
      return true;
    }else{
      return false;
    }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;