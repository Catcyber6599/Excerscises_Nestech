const users = [
    { id: 1, name: 'K18', password: 'password1', age: 30, deleted: false },
    { id: 2, name: 'k19', password: 'password2', age: 25, deleted: true },
    { id: 4, name: 'k20', password: 'password3', age: 35, deleted: false },
    { id: 5, name: 'k21', password: 'password4', age: 15, deleted: true },
    { id: 6, name: 'k22', password: 'password5', age: 45, deleted: false },
    { id: 7, name: 'k23', password: 'password6', age: 55, deleted: false },
    { id: 8, name: 'k24', password: 'password7', age: 5, deleted: true },
    { id: 9, name: 'k25', password: 'password8', age: 6, deleted: true },
    { id: 10, name: 'k26', password: 'password9', age: 7, deleted: true },
    { id: 11, name: 'k27', password: 'password10', age: 8, deleted: false },
    { id: 12, name: 'k28', password: 'password11', age: 9, deleted: false },
    { id: 13, name: 'k29', password: 'password12', age: 10, deleted: true },
    { id: 14, name: 'k30', password: 'password12', age: 11, deleted: false },
    { id: 15, name: 'k31', password: 'password14', age: 12, deleted: true },
    { id: 16, name: 'k32', password: 'password15', age: 13, deleted: false },
    { id: 17, name: 'k33', password: 'password16', age: 14, deleted: false },
    { id: 18, name: 'k34', password: 'password17', age: 16, deleted: true },
    { id: 19, name: 'k35', password: 'password18', age: 17, deleted: true },
    { id: 20, name: 'k36', password: 'password19', age: 18, deleted: false },
    { id: 21, name: 'k37', password: 'password20', age: 19, deleted: false },
    { id: 22, name: 'k38', password: 'password21', age: 20, deleted: true },
    { id: 23, name: 'k39', password: 'password22', age: 21, deleted: true },
    { id: 24, name: 'k40', password: 'password23', age: 22, deleted: false },
    { id: 25, name: 'k41', password: 'password24', age: 23, deleted: true },
    { id: 26, name: 'k42', password: 'password25', age: 24, deleted: false },
    { id: 27, name: 'k43', password: 'password26', age: 26, deleted: true },
    { id: 28, name: 'k44', password: 'password27', age: 27, deleted: false },
    { id: 29, name: 'k45', password: 'password28', age: 28, deleted: true },
    { id: 30, name: 'k46', password: 'password29', age: 29, deleted: false },
]
function login(name, password) {
    const user = users.find((user) => {
        return (
            user.name === name &&
            user.password === password &&
            user.deleted !== true
        )
    })
    if (user) {
        return user
    } else {
        return null
    }
}

// Sử dụng hàm login và in ra kết quả
const loginedUsers = login('K18', 'password1')
if (loginedUsers) {
    console.log('Người dùng đã đăng nhập:', loginedUsers)
} else {
    console.log('Tài khoản hoặc mật khẩu không đúng hoặc tài khoản đã bị xoá')
}

//Bài 2
function getUsersByPage(users, limit, page) {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    if (page <= 0 || limit <= 0) {
        return []
    }

    return users.slice(startIndex, endIndex)
}

const page = -1
const limit = 10
const result = getUsersByPage(users, limit, page)

console.log('Kết quả b2 là: ', result)

// bài 3
function filterUser(users, filter) {
    return users.filter((user) => {
        if (filter.age !== undefined && filter.age !== null) {
            if (user.age !== filter.age) {
                return false
            }
        }
        if (filter.name !== undefined && filter.name !== null) {
            if (
                user.name.toLowerCase().indexOf(filter.name.toLowerCase()) ===
                -1
            ) {
                return false
            }
        }
        return true
    })
}
const filteredUser = filterUser(users, { name: 'k1' })
console.log('Kết quả b3 là: ', filteredUser)
