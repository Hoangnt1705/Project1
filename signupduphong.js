var username = document.querySelector("#username").value;
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
var confimPassword = document.querySelector("#confimPassword").value;
var form = document.querySelector("form")

let user = {
    username: username,
    email: email,
    password: password,
    confimPassword: confimPassword,
}

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}
    showErrow(username, 'Loi');

function showSucces(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput){
    let isEmptyError
    listInput.forEach(input => {
        input.value = input.value.trim()
    if(!input.value){
        showError(input,"Không được để trống")
    }
    else{
        showSucces(input)
    }
    });
    return isEmptyError;
}

function checkEmailError(input){
    const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    let isEmailError = !regexMail.test(input.value)
    if(regexMail.test(input.value)){
        showError()
    }
    else{
        showError(input,"Email Invalid")
    }
    return isEmailError
}
function checkLengthError(input, min, max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} ký tự`)
        return true
    }
    if(input.value.length < min){
        showError(input,`Không được quá ${max} ký tự`)
        return true;
    }
    return false;
}

function checkMatchPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput,'Mật khẩu không trùng khớp')
        return true;
    }
    return true
}

form.addEventListener('submit', function(e){
    e.preventDefault()
   let isEmptyError= checkEmptyError([username,email,password,confimPassword])
   let isEmailError = checkEmailError(email)
   let isUsernameLengthError = checkLengthError(username, 3, 10)
   let isPasswordLengthError = checkLengthError(password, 3, 10)
   let isMatchError = checkMatchPasswordError(password, confimPassword)
    if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchError){
        // do nothing
    }
    else {
        let json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Dang ky thanh cong")
    }

})





// var username = document.querySelector("#username");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var confimPassword = document.querySelector("#confimPassword");
// var form = document.querySelector("form")


// function showError(input,message){
//    let parent = input.parentElement;
//    let small = parent.querySelector('small')
//    parent.classList.add('error')
//    small.innerText = message
// }
// function showSuccess(input){
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     parent.classList.remove('error')
//     small.innerText = ''
//  }

// function checkEmptyError(listInput){
//     let isEmptyError = false;
//     listInput.forEach(input => {
//         input.value.trim()
//         if(!input.value){
//             showError(input,'Không được để trống')
//         }
//         else{
//             showSuccess(input)
//         }
//     });
//     return isEmptyError
// }

// function checkEmailError(input){
//     const regexMail =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   input.value = input.value.trim()
//     let isEmailError = !regexMail.test(input.value)
//   if(regexMail.test(input.value)){
//     showSuccess(input)
//   }
//   else{
//     showError(input,'Email Invalid')
//   }
//   return isEmailError
// }

// function checkLengthError(input, min, max){
//     input.value = input.value.trim()

//     if(input.value.length < min){
//         showError(input,`Phải có ít nhất ${min} ký tự`)
//         return true
//     }
//     if(input.value.length > max){
//         showError(input,`Không được quá ${max} ký tự`)
//         return true
//     }
//     showSuccess(input)
//     return false
// }

// function checkMatchPasswordError(passwordInput,confimPasswordInput){
//     if(passwordInput.value !== confimPasswordInput.value){
//         showError(confimPasswordInput,"Mật khẩu không trùng khớp") 
//         return true
//     }
//     return false
// }

// function entryEmail (event, input){
//     if(event.key == "Enter"){
//         let idInput = document.getElementById(input)
//         idInput.focus()
//     }
// }


// function entry(event){
//     console.log(event);
//     if(event.key == "Enter"){
//        register();
// }
// }


// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     let isEmptyError = checkEmptyError([username, email, password, confimPassword])
//     let isEmailError = checkEmailError(email)
//     let isPasswordLengthError = checkLengthError(password, 3, 15)
//     let isUsernameLenthError = checkLengthError(username, 3 , 15)
//     let isMatchError = checkMatchPasswordError(password, confimPassword)
//     if(isEmptyError || isEmailError || isPasswordLengthError || isUsernameLenthError || isMatchError ){

//     }
//     else{
    // let username = document.querySelector("#username").value;
    // let user = localStorage.getItem('listUser');
    //     console.log(user);
    //     if(user == null){
    //          let username = document.querySelector("#username").value;
    // let email = document.querySelector("#email").value;
    // let password = document.querySelector("#password").value;
    // let confimPassword = document.querySelector("#confimPassword").value;
    //     let user = {
    //                 username: username,
    //                 email: email,
    //                 password: password,
    //                 confimPassword: confimPassword,
    //             }
    //             let json = JSON.stringify(user);
    //     localStorage.setItem(username,json);
    // alert("Dang ky thanh cong")  
    //     }
    // else{
    //     alert("Trùng tài khoản")
    // }
    


        
        
   
//     // }
   
//     }





// })


// const password1 = document.getElementById("password")
// const toggle = document.querySelector("#toggle1")
// function showPassword(){
//     if(password1.type == 'password'){
//         password1.setAttribute('type','text')
//         toggle.classList.add('hide')
//     }
//     else{
//         password1.setAttribute('type','password')
//         toggle.classList.remove('hide')
//     }
// }

// const password2 = document.getElementById("confimPassword")
// const toggle1 = document.querySelector("#toggle2")
// function showPassword2(){
//     if(password2.type == 'password'){
//         password2.setAttribute('type','text')
//         toggle1.classList.add('hide')
//     }
//     else{
//         password2.setAttribute('type','password')
//         toggle1.classList.remove('hide')
//     }
// }

