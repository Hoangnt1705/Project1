function sauKhiDangNhap() {
    let acc = JSON.parse(localStorage.getItem('listUserLogin'))
    if (acc[0]?.username) {
        var add = document.createElement("li")
        console.log(add.id = "sauKhiDangNhap");
        console.log(add);
        var addAccount = '<a id="dangNhap" style=" text-align:right; color:#129f43; font-weight:bold; font-size:12px"></a><ul id="thanhThongTin" class="sub-menu" style="margin-left:1px; margin-top:-4px; bottom:-107px;"><li><a href=""> Thông Tin </a></li><li><a href="index.html" onclick="dangXuat()">Đăng xuất</a></li></ul>'
        add.innerHTML = addAccount
        var ul = document.querySelector("#main-menu")
        ul.append(add)
        document.getElementById("dangNhap").innerHTML = `hi! ${acc[0].username}`


        // var addTruocKhiDangNhap = document.createElement("li")
        // addTruocKhiDangNhap.id = 'truocKhiDangNhap'
        // let addAccountT = '<a id="dangNhapTruoc" style=" text-align:right; color:#129f43; font-weight:bold; font-size:20px" href="login.html"> ĐĂNG NHẬP</a>'
        // addTruocKhiDangNhap.innerHTML = addAccountT
        // let ulT  = document.querySelector("#main-menu")
        // ulT.append(addTruocKhiDangNhap)
        document.getElementById('truocKhiDangNhap').style.display = 'none'; 

    }
    else {

        // var addTruocKhiDangNhap = document.createElement("li")
        // addTruocKhiDangNhap.id = 'truocKhiDangNhap'
        // console.log( addTruocKhiDangNhap);
        // let addAccountT = '<a id="dangNhap" style=" text-align:right; color:#129f43; font-weight:bold; font-size:20px" href="login.html"> ĐĂNG NHẬP</a>'
        // addTruocKhiDangNhap.innerHTML = addAccountT
        // let ulT  = document.querySelector("#main-menu")
        // ulT.append(addTruocKhiDangNhap)
    }
}


function dangXuat() {
    localStorage.removeItem('listUserLogin');

    document.getElementById('truocKhiDangNhap').style.display = 'block';

    // var addTruocKhiDangNhap = document.createElement("li")
    // addTruocKhiDangNhap.id = 'truocKhiDangNhap'
    // let addAccountT = '<a id="dangNhap" style=" text-align:right; color:#129f43; font-weight:bold; font-size:20px" href="login.html"> ĐĂNG NHẬP</a>'
    // addTruocKhiDangNhap.innerHTML = addAccountT
    // let ulT  = document.querySelector("#main-menu")
    // ulT.append(addSauKhiDangNhap)


}

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color) {
    const cirle = document.querySelector('.circle');
    cirle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle')
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}



