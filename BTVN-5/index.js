const username = prompt('Nhập tên người dùng')
const password = prompt('Nhập mật khẩu')

if (username && password) {
    // kiểm tra tài khoản quản trị viên
    if (username === 'admin' && password === 'admin123') {
        alert('Chào mừng bạn, quản trị viên!')
    }
    // Kiểm tra tài khoản người dùng thường
    else if (username === 'user' && password === 'user123') {
        alert('Xin chào, người dùng!')
    }
    // Không trùng với 2 tài khoản
    else {
        alert('Sai tên người dùng hoặc mật khẩu!')
    }
}
// Bỏ trống không nhập
else {
    alert('Vui lòng nhập đầy đủ tên người dùng và mật khẩu!')
}
