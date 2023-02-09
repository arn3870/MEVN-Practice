let arr = [1,1,2,5,6,6,7,8,1,9,9,8,7,]

function removeDuplicates(arr){
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                // j--;
            }
        }
    }
    console.log(arr);
    return arr;
}
removeDuplicates(arr)