function sendEmail1() {
    console.log(document.getElementById("email").value);
    let getCheck = localStorage.getItem('listUser')
    console.log(getCheck);
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (getCheck == null) {
        alert("Ban chua login")
        return;
    } else {
        getCheck = JSON.parse(getCheck)
        let flag = false;
        console.log(getCheck);
        for (let i = 0; i < getCheck.length; i++) {
            if (getCheck[i].email == email && getCheck[i].username == userName) {
                flag = true;
                return getCheck[i].password;
            } else {
                flag = false;
            }
        }
        if (flag == false) {
            console.log("tai khoan khong ton tai");
        }
    }
};
function sendEmail() {
    let a = sendEmail1();
    console.log("2222", a);
    if (a == undefined) {

        return;
    }
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "testsendemailjs09@gmail.com",
        Password: "F09C1D79E069C30D6B2DA69E6834212D334A",
        To: 'tuanhoang1705@gmail.com',
        From: "testsendemailjs09@gmail.com",
        Subject: "<Forgot Password - Starbucks>",
        Body: `Mat khau cu cua ban la: ${a} <br>Thanks, Starbucks account team`,
    }).then(
        message => alert(message)
    );
}





