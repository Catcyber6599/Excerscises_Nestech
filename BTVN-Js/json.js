// Bài 1:  Chuyển đổi một object JavaScript thành JSON.
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York',
}

const jsonString = JSON.stringify(myObject)

console.log('Obj sau khi chuyển thành Json là:', jsonString)

// Bài tập 2: Chuyển đổi một JSON thành object JavaScript.
const jsonString1 = '{"name":"John","age":30,"city":"New York"}'

const myObject1 = JSON.parse(jsonString1)

console.log('Json sau khi chuyển thành OBJ là:', myObject1)

// Bài tập 3: Viết một hàm để so sánh hai object JavaScript / hai JSON.
// So sánh 2 Object
function objectEqual(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}
const object1 = { name: 'John', age: 30 }
const object2 = { name: 'John', age: 30 }

const object3 = { name: 'Alice', age: 25 }

console.log(objectEqual(object1, object2)) // true
console.log(objectEqual(object1, object3)) // false

//So sánh 2 JSON
const jsonString2 = '{"name": "John", "age": 30}'
const jsonString3 = '{"name": "John", "age": 30}'
const jsonString4 = '{"name": "Alice", "age": 25}'

const object4 = JSON.parse(jsonString2)
const object5 = JSON.parse(jsonString3)
const object6 = JSON.parse(jsonString4)

console.log(objectEqual(object4, object5)) // true
console.log(objectEqual(object5, object6)) // false

//Bài tập 4: Viết một hàm để kiểm tra xem một object JavaScript có phải là JSON hay không.
//JSON (JavaScript Object Notation) là một chuỗi hoặc dãy ký tự đại diện cho một object JavaScript.
function isJSON(value) {
    if (typeof value !== 'string') {
        return false
    }
    try {
        JSON.parse(JSON.stringify(value))
        return true
    } catch (e) {
        return false
    }
}

// Sử dụng hàm để kiểm tra
const jsonObj = { name: 'John', age: 30 }
const jsonStr = '{"name": "John", "age": 30}'

console.log(isJSON(jsonObj)) // false, vì đây là một object JavaScript, không phải JSON.
console.log(isJSON(jsonStr)) // true, vì đây là một chuỗi JSON hợp lệ.

// Bài tập 5: Viết một hàm để tạo một object JavaScript từ một chuỗi JSON.  không dùng stringify / và đổi lại k dùng parse
function createObjectFromJSON(jsonStrings) {
    try {
        const object = new Function('return ' + jsonStrings)()
        return object
    } catch (error) {
        console.error('Lỗi khi chuyển đổi chuỗi JSON thành object:', error)
        return null
    }
}

const jsonStrings = '{"name": "John", "age": 30}'
const jsonObjects = createObjectFromJSON(jsonStrings)

if (jsonObjects) {
    console.log('Object từ chuỗi JSON:', jsonObjects)
} else {
    console.log('Chuyển đổi thất bại.')
}
