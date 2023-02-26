// See https://aka.ms/new-console-template for more information
//https://leetcode.com/problems/next-greater-element-i/

// int[] nums1 = {4,1,2};
// int[] nums2 = {1,3,4,2};
// int[] nums2 = {4,3,2,1};

int[] NextGreaterElement(int[] nums1, int[] nums2)
{
    int[] ans = new int[nums1.Length];

    // turns nums1 into a dictionary for O(1) referencing
    Dictionary<int,int> lookUpDic = new Dictionary<int, int>();
    for (int i = 0; i < nums1.Length; i++)
    {
        lookUpDic.Add(i,nums1[i]);
    }


    // run over nums2 comparing lookUpDic values to nums2 values
    // int j needed to progress through lookUpDic keys
    int j = 0;
    foreach(int num in nums2)
    {
        if (j > nums1.Length - 1)
        {
            break;
        }

        if (lookUpDic[j] < num)
        {
            ans[j] = num;
        }
        else
        {
            ans[j] = -1;
        }
        j++;

    }

    return ans;


}


// NextGreaterElement(nums1, nums2);
// Brute force
// Double for-loop bad
// Loop over nums1
// for every element in nums1 find that element in nums2
// loop over every element after that element and see if any values are greater that nums2[j]
// if there are no values greater, override the value at ans[i] with -1
// otherswise override the value at i with the next greater value from nums2 into 'ans' array
// ...continue
// [](Array) !== List
// Console.WriteLine(NextGreaterElement(nums1, nums2));


// Explanation from Leetcode of using Stack
// https://leetcode.com/problems/next-greater-element-i/solutions/97595/java-10-lines-linear-time-complexity-o-n-with-explanation/
int[] nums1 = {2,4};
int[] nums2 = {3,2,1,4};

// int[] nums1 = {4,1,2};
// int[] nums2 = {1,3,4,2};

/// CHAT GPT
int[] NextGreaterElementGPT(int[] nums1, int[] nums2) {
    int n1 = nums1.Length, n2 = nums2.Length;
    // stack keeps track of the last "next greatest number" for comparison
    Stack<int> stack = new Stack<int>();
    Dictionary<int, int> map = new Dictionary<int, int>();
    int[] ans = new int[n1];

    for (int i = n2 - 1; i >= 0; i--) {
        while (stack.Count > 0 && stack.Peek() <= nums2[i]) {
            stack.Pop();
        }
        if (stack.Count > 0) {
            map[nums2[i]] = stack.Peek();
        } else {
            // push the last number with with -1 because there will never be a next greater
            map[nums2[i]] = -1;
        }
        stack.Push(nums2[i]);
    }

    for (int i = 0; i < n1; i++) {
        if (map.ContainsKey(nums1[i])) {
            ans[i] = map[nums1[i]];
        }
    }

    return ans;
}

Console.WriteLine(NextGreaterElementGPT(nums1, nums2));

/*The first loop iterates through nums2 from right to left, and for each element,
 we pop all the elements from the stack that are smaller than the current element,
 because they cannot be the next greater element of any element in nums1.
 We store the next greater element of each popped element in the hash map.

The second loop iterates through nums1 and for each element,
we look up its index in the hash map. If the index is found, we add the next greater element to the answer array,
otherwise we add -1. Finally, we return the answer array.
*/
// Dictionary<int,int> dict = new Dictionary<int,int>()
// {
//     {1,2}
// dict.Add(Tkey, Tvalue)// };

// dict[1] = 5;


int[] NextGreaterElementGPTForLoop(int[] nums1, int[] nums2) {
    int[] ans = new int[nums1.Length];
    for (int i = 0; i < nums1.Length; i++) {
        int idx = Array.IndexOf(nums2, nums1[i]);
        int greater = -1;
        for (int j = idx + 1; j < nums2.Length; j++) {
            if (nums2[j] > nums1[i]) {
                greater = nums2[j];
                break;
            }
        }
        ans[i] = greater;
    }
    return ans;
}
//
Console.WriteLine(NextGreaterElementGPTForLoop(nums1, nums2));
// dict[5] = 7;