// Given an unsorted integer array, find the smallest missing positive integer.
// Example 1:
// Input: [1,2,0]
// Output: 3
// Example 2:
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
// Input: [7,8,9,11,12]
// Output: 1


<
script >
    var firstMissingPositive = function(nums) {
        const n = nums.length

        for (let i = 1; i < n; i++) {
            while (nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
                const t = nums[i]
                nums[i] = nums[t - 1]
                nums[t - 1] = t
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1
            }
        }

        return n + 1
    }; <
script >