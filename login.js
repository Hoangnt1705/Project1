
var username = document.querySelector("#username");
var password = document.querySelector("#password")
var form = document.querySelector("form")


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value.trim()
        if (!input.value) {
            showError(input, 'Không được để trống')
        }
        else {
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }
    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`)
        return true
    }
    showSuccess(input)
    return false;
}

function entryEmail(event, input) {
    if (event.key == "Enter") {
        let idInput = document.getElementById(input)
        idInput.focus()
    }
}


function entry(event) {
    console.log(event);
    if (event.key == "Enter") {
        register();
    }
}




form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, password])
    let isPasswordLengthError = checkLengthError(password, 3, 14)
    let isUsernameLengthError = checkLengthError(username, 3, 14)
    if (isEmptyError || isPasswordLengthError || isUsernameLengthError) {
        //
    }
    else {
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let listUser = localStorage.getItem("listUser");

        if (listUser == null) {
            alert("đăng nhập thất bại")
        } else {
            let data = JSON.parse(listUser);
            let flag = true;
            for (let i = 0; i < data.length; i++) {
                if (data[i].username == username && data[i].password == password) {
                    flag = false
                    let username = document.getElementById("username").value;
                    let password = document.getElementById("password").value;
                    let userLogin = {
                        username: username,
                        password: password,
                    }
                    let listUserLogin = localStorage.getItem("listUserLogin");
                    if (listUserLogin == null) {
                        listUserLogin = [];
                        listUserLogin.push(userLogin)
                        localStorage.setItem("listUserLogin", JSON.stringify(listUserLogin));
                    }
                    dangNhapThanhCong();
                 setTimeout(function () {
                    window.location.href = "index.html"; // the redirect goes here
                 },700);
                    break;
                }
                else {
                    flag = true;
                }
            }
            if (flag == true) {
                dangNhapThatBai();
            }
        }



        // function myFunction() {
        //     let a = JSON.parse(localStorage.getItem('listUser'))
        //     // console.log( a[0].username);
        //     document.getElementById("demo").innerText =`Hi!${username}`;
        // }
        // myFunction()
    }
})



