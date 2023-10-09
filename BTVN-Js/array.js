const user = {
    name: 'K18',
    age: 30,
    address: '123 Street',
    email: 'johndoe@example.com',
}

// Lấy thông tin từ đối tượng user và tạo mảng thông tin
const userInfo = [
    'Tên: ' + user.name.toLowerCase(),
    'Tuổi: ' + user.age,
    'Địa chỉ: ' + user.address,
    'Email: ' + user.email,
]

console.log(userInfo)
