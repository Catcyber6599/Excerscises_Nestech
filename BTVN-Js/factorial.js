function factorial(n) {
    if (n === 0) {
        // Giai thừa của 0 là 1
        return 1
    } else {
        // Gọi đệ quy để tính giai thừa của n-1
        return n * factorial(n - 1)
    }
}

// Test tính giai thừa
console.log(factorial(5)) // Kết quả là 120 (5!)
