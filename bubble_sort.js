
const buubleSort  = (nums) => {
    let swiped = false;
    do{
        swiped = false;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > nums[i + 1]){
                const temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp
                swiped = true
            }
        }
    }while(swiped)
    return nums;
}

console.log(buubleSort([10, 5, 3, 1, 9, 4, 7, 6, 2, 8]))