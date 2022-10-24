
const btn = document.querySelectorAll("button");
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h1").innerText;
        var productPrice = product.querySelector("span").innerText;
        addcart(productPrice, productImg, productName);

    })
})

//toast
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        //auto remove toast
        const autoRemovedId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        //remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast_close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovedId);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast-${type}`)
        toast.style.animation = `slineInleft ease 1s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = ` <div class="toast_icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast_body"> 
            <h3 class="toast_title"> ${title}</h3>
            <p class="toast_msg">${message}</p>
        </div>
        <div class="toast_close">
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        </div>`;
        main.appendChild(toast);
    }
}
function showDaCoSanPhamTrongGioHang() {
    toast({
        title: 'Lưu ý',
        message: 'Sản phẩm này đã có trong giỏ hàng',
        type: 'warning',
        duration: 3000
    });
}
function showSuccessToast() {
    toast({
        title: 'thành công',
        message: 'Máy vi tính ok ok ok',
        type: 'success',
        duration: 3000
    });
}

function showThemGioHang() {
    toast({
        title: 'Thành Công',
        message: 'Bạn đã thêm thành công 1 sản phẩm',
        type: 'success',
        duration: 3000
    });
}

//add cart
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    showThemGioHang();
    if(addtr == null){showThemGioHang()};
    for (let i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title");
        if (productT[i].innerText == productName) {
            showDaCoSanPhamTrongGioHang();
            return;
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 35px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;" ><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    carttotal();
    deleteCart();
}
//tong tirn phia duoi cung gio hang

function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    var totalItems = 0;
    // console.log(cartItem.length);
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value;
        //    console.log(inputValue);
        let productPrice = cartItem[i].querySelector(".prices").innerText;
        //    console.log(productPrice);
        let totalItem = inputValue * productPrice * 1000;
        //    let totalB = totalA.toLocaleString('de-DE')
        //    console.log(totalB);
        totalItems = totalItems + totalItem;
        // totalPaser =  totalItems.toLocaleString('de-DE')
    }
    var cartSum = document.querySelector(".price-total span");
    cartSum.innerHTML = totalItems.toLocaleString('de-DE');
    inputchange();
}

//delete
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener('click', function (event) {
            var cartDelete = event.target
            var cartItemRemove = cartDelete.parentElement.parentElement;
            cartItemRemove.remove();
            carttotal();
        })
    }
}

//inputchange
function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            carttotal();
        })
    }
}

// function searchCart(){
//     let h1 = document.querySelectorAll("h1")
//     let valueSearchInput = document.getElementById("search").value
//     let valueSearchInputLowCase = valueSearchInput.toLowerCase()
//     for(let i = 0;i < h1.length; i++){
//         let data = h1[i].innerText
//         let dataLowcase = data.toLowerCase()
//         // console.log(dataLowcase);
//         if(valueSearchInputLowCase == dataLowcase) {
//             document.getElementById('container').style.display = 'none';
//             console.log(valueSearchInputLowCase);

//         }

//     }
// }

var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input', function (e) {
    let search = e.target.value.trim().toLowerCase();
    let listCart = document.querySelectorAll('.product-item')
    listCart.forEach(item => {
        console.log(item.innerText);
        if (item.innerText.toLowerCase().includes(search)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
})


const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
})


//........................... 
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});



function changeProductList(type,element){
    let tabs = document.getElementsByClassName('tab-item');
    console.log(tabs);
    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.background = '';
    }
    element.style.background = '';
    document.getElementById(type).style.display ='block';

    switch (type ) {
        case 'trend':
            document.getElementById('new').style.display ='none';
            document.getElementById('best-sell').style.display ='none';
            
            break;
        case 'new':
            document.getElementById('trend').style.display ='none';
            document.getElementById('best-sell').style.display ='none';
            
            break;
        case 'best-sell':
            document.getElementById('trend').style.display ='none';
            document.getElementById('new').style.display ='none';
            
            break;
    
       
    }
}



function clickCskh(){
    document.getElementById("shopee-mini-chat-embedded1").style.display = "none";
}


function clickCskh1(){
    document.getElementById("shopee-mini-chat-embedded1").style.display = "block";
}