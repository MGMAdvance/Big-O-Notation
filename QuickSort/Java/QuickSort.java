import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;

public class QuickSort {
    public static void callQuick(int[] array){
        quicksort(array, 0, array.length);
    }

    public static void quicksort(int[] array, int left, int right){
        if(left >= right){
            return;
        }
        int pivot = array[(left + right) / 2];
        int index = partition(array, left, right, pivot);
        quicksort(array, left, index - 1);
        quicksort(array, index, right);
    }

    public static void swap(int[] array, int left, int right){
        array[left] = right;
        array[right] =  left;
    }

    public static int partition(int[] array, int left, int right, int pivot){
        while (left <= right){
            while(array[left] < pivot){
                left++;
            }
            while(array[right] > pivot){
                right--;
            }
            if (left <= right){
                swap(array, left, right);
                left++;
                right--;
            }

        }
        return left;
    }
    public static void main(String[] args) {
        int[] nums = {8,2,1,5,4,6,3,12,11,9,7,10};
        System.out.println(nums);
        callQuick(nums);
    }

}