/**
 * use towSum
 * target = 9
 * number = [2,1,3,5,8] // [2,7,11,15]
 * make a hash map or find objects length/index numbers // 2 in 0 length numbers in this array you start 0 length numbers form any kind of array
 * example => 2=>0 1=>1 3=>2 5=>3 8=>4 and again 2=>0  7=>2 11=>3 15=>4
 * now take 0 index number 2 and minus 9 => (9-2=6)
 * now see this 6 is exists in before 2, if not exists go to next index and doing same thing
 * (9-8=1) its exists before 8 and here 1 is index number here i get 1 and 8 is index number here i get 4 => [4,1]
 * and this is ans for target = 9
 * 9-2=7, 9-7=2,9-11=2,9-15=6, index number of // [2 is 0, 7 is 1 , 11 is 2, 15 is 3]
 * and second => target = 9 ans have => [0,1 or 0,2 ]
 *
 * here this algorithm
 */




// Define the Solution class
function Solution() {
    // Define the twoSum method
    this.twoSum = function(nums, target) {
        // Initialize the ans array
        var ans = [0, 0];
        // Create a hashmap
        var map = {};
        // Iterate through the nums array
        for (var i = 0; i < nums.length; i++) {
            // Calculate the difference between the target and the current number
            var diff = target - nums[i]; // [nums[i], diff]
            // Check if the difference exists in the hashmap
            if (!map.hasOwnProperty(diff)) {
                // If the difference does not exist, add the current number and its index to the hashmap
                map[nums[i]] = i;
            } else {
                // If the difference exists in the hashmap, retrieve its index
                ans[0] = i;
                ans[1] = map[diff];
            }
        }
        // Return the ans array
        return ans;
    };
}

// Create an instance of the Solution class
var solution = new Solution();
// Call the twoSum method with the provided arguments
var result = solution.twoSum([2, 7, 11, 15], 9);
// Print the result
console.log(result); // [ 1, 0 ]
