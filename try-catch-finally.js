// try, catch , and finally are control flow statements used to handling exceptions and errors during code execution.
// try = used to wrap a block of code that might throw an error 
// catch = executes if an error occur in the try block
// finally = executes after the try and catch blocks , regardless of whether an error was thrown or not . 

function divide (a , b){
    try {

        if(b==0){
            throw new Error("cannot divide by zero ");
        }
        console.log(`result ${a/b}`);

    } catch (error) {
        console.error("Error : ",error.message);
    }finally{
        console.log("division attempt completed");
    }
}

divide(90,30)
// result 3
// division attempt completed

divide(50,0)
// Error :  cannot divide by zero
// division attempt completed