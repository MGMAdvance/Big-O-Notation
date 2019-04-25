var active = "n"; //Active logs (y)
var total = 30; //Total of numbers for array testing

//Call function quicksort
function callQuick(array){
    quicksort(array,0,array.length);
    console.log(array);
}

//Prepare the pivot for sorting
function quicksort(array, left, right){
    if(left >= right){
        return;
    }
    pivot = array[(left + right) / 2];
    index = partition(array, left, right, pivot);
    quicksort(array,left,index-1);
    quicksort(array,index,right);
}

//Change a positions in array
function swap(array,left,right){
    array[left] = right;
    log(active,"left",left);
    array[right] = left;
    log(active,"right",right);
    array.pop(); // Remove a last number
    return array;
}

//Sorting according with algorithm Quick Sorting
function partition(array, left, right, pivot){
    while(left <= right){
        while(array[left] < pivot){
            left++;
            log(active,"left",left, "normal");
        }
        while(array[right] > pivot){
            right--;
            log(active,"right",right, "normal");
        }
        if(left <= right){
            swap(array,left,right);
            left++;
            right--;
        }
    }
    return left;
}

//Logs
function log(on="y",direction, value, type="swap"){
    if(on == "y" || on == "Y"){
        if(direction == "left"){
            if(type == "swap"){
                return console.log("[  SWAP LEFT  ]: " + value);
            }
            return console.log("Left: " + value)
        }else{
            if(type == "swap"){
                console.log("[  SWAP RIGHT ]: " + value)
            }
            return console.log("Right: " + value);
        }
    }
}

//Testing
function test(total, type=0){
    let n = [];

    if(type == 1){
        return nums = [16,8,2,1,17,5,4,6,3,12,11,9,7,10,13,14,15];
    }

    for (i = 0; i < total; i++) {
        n.push(Math.floor((Math.random() * 100) + 1));    
    }
    console.log(n);
    return n;
}


console.table( callQuick( test(total) ) );