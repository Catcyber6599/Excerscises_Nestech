//Bài 1: Tạo một Promise trả về kết quả của phép tính 2 * 3
const multiplyPromise = new Promise((resolve, reject) => {
    const result = 2 * 3
    if (result) {
        resolve(result)
    } else {
        reject('Lỗi trong quá trình thực hiện phép nhân')
    }
})
multiplyPromise
    .then((result) => {
        console.log('Kết quả của phép nhân là:', result)
    })
    .catch((e) => {
        console.error('Đã xảy ra lỗi', e)
    })

//Tìm hiểu về hàm fetch + demo
fetch('https://api.example.com/data') // Gửi yêu cầu GET đến URL cụ thể
    .then((response) => {
        if (!response.ok) {
            throw new Error('Lỗi mạng hoặc lỗi máy chủ')
        }
        return response.json() // Chuyển đổi dữ liệu JSON từ phản hồi
    })
    .then((data) => {
        console.log('Dữ liệu từ máy chủ:', data)
    })
    .catch((error) => {
        console.error('Đã xảy ra lỗi:', error)
    })

// Tạo một Promise trả cùng với hàm setTimeout() để trả về dữ liệu từ callback hàm setTimeout
function delayTime(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Đây là dữ liệu trả về từ callback set timeout'
            resolve(data)
        }, timeout)
    })
}
delayTime(2000)
    .then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log('Đã xảy ra lỗi', e)
    })

// Tạo một Promise trả về kết quả của phép tính 2 * 3 chỉ khi fetch() thành công.
function multiplyFetch() {
    return fetch('https://example.com/multiply')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Lỗi mạng hoặc máy chủ')
            }
            return response.json()
        })
        .then((data) => {
            console.log('Dữ liệu từ máy chủ:', data) // In ra dữ liệu từ máy chủ
            const result = 2 * 3 // Thực hiện phép tính 2 * 3
            return result
        })
}

multiplyFetch()
    .then((result) => {
        console.log('Kết quả phép nhân sau khi fetch là', result) // In ra kết quả phép tính
    })
    .catch((e) => {
        console.log('Đã xảy ra lỗi', e) // In ra lỗi nếu có lỗi
    })

// Tạo một Promise trả về kết quả của việc thực thi Promise khác.
function firstPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Đây là kết quả của first Promise')
        }, 2000)
    })
}
function secondPromise(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Đây là kết quả của second Promise', result)
        })
    })
}
firstPromise()
    .then((result) => {
        return secondPromise(result)
    })
    .then((final) => {
        console.log('Kết quả cuối cùng: ', final)
    })
    .catch((e) => {
        console.log('Đã xảy ra lỗi', e)
    })

// Tạo một Promise trả về kết quả của việc thực thi hai Promise khác, nhưng chỉ khi cả hai Promise đều thành công.
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Kết quả Task đầu tiên')
        }, 2000)
    })
}
function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Kết quả của Tash thứ 2')
        }, 1000)
    })
}
Promise.all([firstTask(), secondTask()])
    .then((result) => {
        const [result1, result2] = result
        console.log(result1)
        console.log(result2)
        console.log(result)
    })
    .catch((e) => {
        console.log('Đã xảy ra lỗi', e)
    })

// Kết hợp sử dụng async await để biết 1 hàm delay
function delayTime(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}
async function wait() {
    console.log('Bắt đầu')
    await delayTime(2000)
    console.log('Sau khi chờ 2s')
}
wait()

// sử dụng async + await với yêu cầu fetch dữ liệu về . sau khi có dữ liệu thì tính tổng các id đã lấy được
async function sumIdFecth() {
    const response = await fetch(
        'https://my-json-server.typicode.com/typicode/demo/posts'
    )
    if (!response.ok) {
        throw new Error('lỗi mạng hoặc máy chủ')
    }
    const data = await response.json()
    let sumOfId = 0

    data.forEach((item) => {
        sumOfId += item.id
    })
    return sumOfId
}

async function sumFinally() {
    const sum = await sumIdFecth()
    console.log('Tổng id là', sum)
}
sumFinally()
