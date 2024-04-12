function fibonacci(num) {
    if (num <= 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let prev = 0;
        let current = 1;
        for (let i = 2; i < num; i++) {
            let temp = current;
            current = current + prev;
            prev = temp;
        }
        return current;
    }
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
