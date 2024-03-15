function factorial(n) {
    console.log(n);
    if(n > 1){
        n *= factorial(n-1);
        console.log(n); 
    }
    return n;
}

console.log(factorial(3));