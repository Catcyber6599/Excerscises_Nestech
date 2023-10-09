function validateInput(inputType, inputValue) {
  switch (inputType) {
    case "username":
      // Kiểm tra độ dài tên đăng nhập phải từ 4 đến 16 ký tự
      if (inputValue.length < 4 || inputValue.length > 16) {
        return "Tên đăng nhập phải từ 4 đến 16 ký tự.";
      }
      // Kiểm tra không có ký tự đặc biệt
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      if (!usernameRegex.test(inputValue)) {
        return "Tên đăng nhập không được chứa ký tự đặc biệt.";
      }
      return true;

    case "password":
      // Kiểm tra độ dài mật khẩu phải từ 6 đến 20 ký tự
      if (inputValue.length < 6 || inputValue.length > 20) {
        return "Mật khẩu phải từ 6 đến 20 ký tự.";
      }
      // Kiểm tra phải có ít nhất 1 số
      const passwordRegex = /\d/;
      if (!passwordRegex.test(inputValue)) {
        return "Mật khẩu phải chứa ít nhất một số.";
      }
      // Kiểm tra phải có ít nhất 1 ký tự viết hoa
      const uppercaseRegex = /[A-Z]/;
      if (!uppercaseRegex.test(inputValue)) {
        return "Mật khẩu phải chứa ít nhất một ký tự viết hoa.";
      }
      // Kiểm tra phải có ít nhất 1 ký tự viết thường
      const lowercaseRegex = /[a-z]/;
      if (!lowercaseRegex.test(inputValue)) {
        return "Mật khẩu phải chứa ít nhất một ký tự viết thường.";
      }
      return true;

    default:
      return false;
  }
}

console.log(validateInput("username", "john_doe")); // true
console.log(validateInput("username", "john.doe")); // Tên đăng nhập không được chứa ký tự đặc biệt
console.log(validateInput("username", "john")); //true
console.log(validateInput("password", "Abc123")); // true
console.log(validateInput("password", "abc123")); // Mật khẩu phải chứa ít nhất một ký tự viết hoa, một ký tự thường và một số
console.log(validateInput("password", "password")); // Mật khẩu phải chứa ít nhất một số.
