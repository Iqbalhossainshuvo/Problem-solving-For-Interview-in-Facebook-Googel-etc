<h1>Problem solving java and javascript</h1>

/** Problem 1 
1) The twoSum function takes in an array of numbers (nums) and a target number (target) and returns an array of two indices that add up to the target.
2) The ans array is initialized to store the result.
3) The map is created using the Map data structure to store the numbers and their indices.
4) The loop iterates through each number in the nums array.
5) Inside the loop, the difference between the target and the current number (diff) is calculated.
6) It checks if the diff exists in the map using the has method.
7) If the diff doesn't exist in the map, it means that the complement for the current number hasn't been found yet, so it adds the current number and its index to the map using the set method.
7) If the diff exists in the map, it means that the complement for the current number has been found previously, so it retrieves its index from the map and assigns it to ans[1]. The current index is assigned to ans[0].
8) The loop is exited using the break statement since the result has been found.
9) Finally, the ans array is returned as the result of the function.


/** javaScript Problem1

1)The code defines a function named "twoSum" within the context of a Solution object.
2) The "twoSum" function takes in two parameters: an array of numbers called "nums" and a target number called "target."
3) It initializes an array called "ans" with two elements, both initially set to 0. This array will store the indices of the two numbers that add up to the target.
4) It creates an empty hashmap called "map" to store the numbers and their corresponding indices.
5) The code enters a loop that iterates through each number in the "nums" array.
6) Inside the loop, it calculates the difference between the target and the current number and assigns it to the variable "diff."
7) It checks if the "diff" exists as a key in the "map" hashmap using the "hasOwnProperty" method.
8) If the "diff" does not exist in the hashmap, it means that the complement for the current number hasn't been found yet. In this case, it adds the current number and its index to the "map" hashmap using the current number as the key and the current index as the value
9) If the "diff" exists in the hashmap, it means that the complement for the current number has been found previously. In this case, it retrieves the index of the complement from the "map" hashmap and assigns it to "ans[1]". The current index is assigned to "ans[0]".
10) Once the indices are assigned, it breaks out of the loop using the "break" statement since the result has been found.
11) Finally, it returns the "ans" array, which contains the indices of the two numbers that add up to the target.

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
 * here this algorithm in java and javascript
 */