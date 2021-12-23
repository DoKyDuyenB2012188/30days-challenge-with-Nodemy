const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
//Ham dùng đổi class cha của thẻ input và thẻ small chứa text là message
function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error'
    const small = formcontrol.querySelector('small')
    small.innerText = message
}
// Ham dùng đổi class cha của thẻ input và làm rỗng thẻ small
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
    const small = formcontrol.querySelector('small')
    small.innerText = ''
}
// Hàm kiểm tra email hợp lệ hay không
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, "Email is not valid")
    }
}
//Hàm kiểm tra yêu cầu bắt buộc
function checkRequired(inputArr) {
    let isRequired = false
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true
        }
        else{
            showSuccess(input)
        }
    });
    return isRequired
}
//Hàm xác định độ dài của thẻ input
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} charaters`)

    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${min} charaters`)
    }
    else {
        showSuccess(input)
    }
}
//Hàm kiểm tra 2 thẻ input có cùng giá trị hay không
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}
//Hàm lấy tên của id của thẻ input
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15)
        checkLength(password, 6, 25)
        checkEmail(email)
        checkPasswordMatch(password, password2)
    }
})