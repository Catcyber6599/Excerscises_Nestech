var bcrypt = require('bcrypt')

// Bước 1: Tạo mảng User
const users = []

// Bước 2: Tạo mới user
function createUser(name, password) {
    /// Biểu thức chính quy để kiểm tra xem chuỗi có chứa chữ số hoặc ký tự đặc biệt không
    const regex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/

    // Kiểm tra xem name và password không được bỏ trống và không chứa chữ số hoặc ký tự đặc biệt
    if (!name || !password || regex.test(name) || regex.test(password)) {
        return 'Tên và mật khẩu không được bỏ trống và không được chứa chữ số hoặc ký tự đặc biệt !'
    }
    // Check xem người dùng có tồn tại hay chưa
    const existUser = users.find((user) => user.name === name)
    if (existUser) {
        return 'Người dùng đã tồn tại !'
    }

    // Hash mật khẩu
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    // Tạo một user mới và đẩy vào mảng
    const newUser = { name: name, password: hashedPassword }
    users.push(newUser)
    return 'Tạo tài khoản mới thành công !'
}

// Bước 3: Đăng nhập
function login(name, password) {
    // Tìm kiếm user theo name
    const user = users.find((user) => user.name === name)
    if (!user) {
        return 'Người dùng không tồn tại !'
    }

    // So sánh mật khẩu với mật khẩu đã hash
    const filledPassword = bcrypt.compareSync(password, user.password)
    if (filledPassword) {
        return 'Đăng nhập thành công !'
    } else {
        return 'Sai mật khẩu vui lòng nhập lại !'
    }
}
// B4: Quên mật khẩu
function forgotPassword(name, newPassword) {
    // Tìm user theo name
    const user = users.find((user) => user.name === name)
    if (!user) {
        return 'Tài khoản người dùng không tồn tại !'
    }

    // Hash mật khẩu mới cho user
    const saltRounds = 10
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds)

    // Cập nhật mật khẩu mới cho user
    user.password = hashedPassword

    return 'Đổi mật khẩu thành công !'
}

// Test
console.log('---------------------------------------------------------------')
console.log(createUser('user1', 'password1')) //Tạo tài khoản mới thành công
console.log(createUser('user2', 'password2')) //Tạo tài khoản mới thành công
console.log(createUser('user3', 'password3')) //Tạo tài khoản mới thành công
console.log(createUser('user4', 'password4')) //Tạo tài khoản mới thành công
console.log(createUser('user1', 'password2')) // Người dùng đã tồn tại
console.log(login('user1', 'password1')) //Đăng nhập thành công
console.log(login('user1', 'wrongpassword')) //Sai mật khẩu vui lòng nhập lại
console.log(forgotPassword('user1', 'newpassword')) //Đổi mật khẩu thành công
console.log(login('user1', 'newpassword')) //Đăng nhập thành công
console.log('Danh sách người dùng là: ', users)
