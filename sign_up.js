
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confimPassword = document.querySelector("#confimPassword");
var form = document.querySelector("form")
function showError(input,message){
   let parent = input.parentElement;
   let small = parent.querySelector('small')
   parent.classList.add('error')
   small.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
 }
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value.trim()
        if(!input.value){
            showError(input,'Không được để trống')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}
function checkEmailError(input){
    const regexMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim()
    let isEmailError = !regexMail.test(input.value)
  if(regexMail.test(input.value)){
    showSuccess(input)
  }
  else{
    showError(input,'Email Invalid')
  }
  return isEmailError
}
function checkLengthError(input, min, max){
    input.value = input.value.trim()

    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} ký tự`)
        return true
    }
    if(input.value.length > max){
        showError(input,`Không được quá ${max} ký tự`)
        return true
    }
    showSuccess(input)
    return false
}
function checkMatchPasswordError(passwordInput,confimPasswordInput){
    if(passwordInput.value !== confimPasswordInput.value){
        showError(confimPasswordInput,"Mật khẩu không trùng khớp") 
        return true
    }
    return false
}
function entryEmail (event, input){
    if(event.key == "Enter"){
        let idInput = document.getElementById(input)
        idInput.focus()
    }
}
function entry(event){
    console.log(event);
    if(event.key == "Enter"){
       register();
}
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, password, confimPassword])
    let isEmailError = checkEmailError(email)
    let isPasswordLengthError = checkLengthError(password, 3, 15)
    let isUsernameLenthError = checkLengthError(username, 3 , 15)
    let isMatchError = checkMatchPasswordError(password, confimPassword)
    if(isEmptyError || isEmailError || isPasswordLengthError || isUsernameLenthError || isMatchError ){
    }
    else{
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confimPassword = document.querySelector("#confimPassword").value;
        let user = {
                    username: username,
                    email: email,
                    password: password,
                    confimPassword: confimPassword,
                }
            let listUser=localStorage.getItem("listUser");
            if(listUser==null){
                listUser=[];
                listUser.push(user)
                 alert('đăng ký thành công1');
                localStorage.setItem("listUser",JSON.stringify(listUser));       
            }
            else{ 
              let checkListUser=JSON.parse(listUser);
              let flag=true;
              for (let i = 0; i < checkListUser.length; i++) {
               if(checkListUser[i].username == user.username){
               flag=false
               alert('trùng tài khoản');
               break;
               }
               else{
               flag=true;
               }
              }
              if(flag==true){
                checkListUser.push(user)
               alert('đăng ký thành công2');
                
              }
              localStorage.setItem("listUser",JSON.stringify(checkListUser))
              
               }

    }
})
const password1 = document.getElementById("password")
const toggle = document.querySelector("#toggle1")
function showPassword(){
    if(password1.type == 'password'){
        password1.setAttribute('type','text')
        toggle.classList.add('hide')
    }
    else{
        password1.setAttribute('type','password')
        toggle.classList.remove('hide')
    }
}

const password2 = document.getElementById("confimPassword")
const toggle1 = document.querySelector("#toggle2")
function showPassword2(){
    if(password2.type == 'password'){
        password2.setAttribute('type','text')
        toggle1.classList.add('hide')
    }
    else{
        password2.setAttribute('type','password')
        toggle1.classList.remove('hide')
    }
}

// function signUp(e){
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confimPassword = document.getElementById("confimPassword").value;
    
//     if (username == ""){
//         alert("Bạn chưa nhập tên đăng nhập");
//         return false;
//       }
//     if (username.length < 4){
//         alert("Tài khoản đăng nhập cần có 3 ký tự trở lên");
//         return false;
//       }
//     if (username.length > 16){
//         alert("Tài khoản đăng nhập tối đa 15 ký tự");
//         return false;
//     }
//       if(email == "" ){
//         alert("Mời nhập email vào")
//         return false
//     }
//       if (password == ""){
//         alert("Bạn chưa nhập mật khẩu");
//         return false;
//     }
//     if (password.length < 4){
//         alert("Mật khẩu cần có 3 ký tự trở lên");
//         return false;
//     }
//     if (password.length > 13){
//         alert("Mật khẩu tối đa 12 ký tự");
//         return false;
//     }
//       if (password != confimPassword){
//         alert("Mật khẩu nhập lại không đúng");
//         return false;
//     }

//     let user = {
//         username,
//         email,
//         password,
//         confimPassword,
//     }
//     let json = JSON.stringify(user);
//     localStorage.setItem(username,json);
//     alert("Dang ky thanh cong")
// }

