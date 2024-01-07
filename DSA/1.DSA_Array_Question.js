
// Sort an array of 's and 1't
class Solution {
    segregate0and1(arr,n) {
        let i=0;
        let j=n-1;

        while(i<j){
            if(arr[i]==0){
                i++;
            }
            else if(arr[j]==1){
                j--;
            }
            else {//arr[1]==1 and arr[j]==0 // Swapping
                let temp=arr[1];
                arr[i]= arr[j];
                arr[j]= temp;
            }
        }
    }
}