// Bài tập1. dùng sử dụng async await với fetch
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data')
        if (!response.ok) {
            throw new Error('Lỗi mạng hoặc máy chủ')
        }
        const data = await response.json()
        console.log('Dữ liệu máy chủ', data)
    } catch (e) {
        console.log('Đã xảy ra lỗi', e)
    }
}
fetchData()
