//(...) ,  allows a function to accept an indefinite number of arguments as an array . it is denoted by three dots and is used in function parameters to collect all the remaining arguments into a single array . 

function sum (...nums){
    console.log(nums);
}

sum(1,2,3,4,5)