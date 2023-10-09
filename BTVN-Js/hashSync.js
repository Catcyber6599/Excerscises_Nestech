const bcrypt = require('bcrypt')
const saltRounds = 10 // Số vòng lặp

const plainTextPassword = 'myPassword'

// Tạo chuỗi hash từ mật khẩu và salt
const hashedPassword = bcrypt.hashSync(plainTextPassword, saltRounds)

console.log('Đây là:', hashedPassword) // Đây là chuỗi hash sẽ được lưu trữ trong cơ sở dữ liệu
