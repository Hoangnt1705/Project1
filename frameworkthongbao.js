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
        main.appendChild(toast)
    }
}
function showErrorToast() {
    toast({
        title: 'thất bại',
        message: 'Máy vi tính ok as ok',
        type: 'error',
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


function dangNhapThanhCong() {
    toast({
        title: 'Success',
        message: 'Đăng nhập thành công',
        type: 'success',
        duration: 1500
    });
}

function dangNhapThatBai() {
    toast({
        title: 'Error',
        message: 'Sai tài khoản hoặc mật khẩu',
        type: 'error',
        duration: 1500
    });
}