// Shallow copy chỉ sao chép các tham chiếu đến các đối tượng con bên trong, nghĩa là nếu bạn thay đổi các
// thuộc tính của các đối tượng con, thì các bản sao sẽ cùng bị ảnh hưởng.
// Deep copy, ngược lại, sao chép tất cả các đối tượng con bên trong, tạo ra một bản sao độc lập hoàn toàn.
const originalObject = {
    name: 'John Doe',
    age: 30,
    address: '123 Main Street, Anytown, CA',
    listFriends: [
        {
            name: 'Jane Doe',
            age: 25,
            address: '456 Elm Street, Anytown, CA',
        },
        {
            name: 'John Smith',
            age: 28,
            address: '789 Oak Street, Anytown, CA',
        },
    ],
}
// Shallow copy của đối tượng
const shallowCopy = { ...originalObject }
console.log('Shallow copy 1', shallowCopy)
// Deep copy của đối tượng
const deepCopy = JSON.parse(JSON.stringify(originalObject))
console.log('Deep Copy 1', deepCopy)
// Thay đổi shallow copy
shallowCopy.name = 'Alice'
shallowCopy.listFriends[0].name = 'Bob'

// Thay đổi deep copy
deepCopy.name = 'Eve'
deepCopy.listFriends[1].name = 'Charlie'

console.log('Original Object:', originalObject)
console.log('Shallow Copy 2:', shallowCopy)
console.log('Deep Copy 2', deepCopy)
