

// let user = localStorage.getItem(username);
// document.getElementById("username").innerText = user.username;
// console.log(user);
    
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const cirle = document.querySelector('.circle');
    cirle.style.background = color;
}


function myFunction() {
    let a = JSON.parse(localStorage.getItem('listUser'))
console.log("ua=ser",acc[0]);
    // console.log( a[0].username);
    if(acc[0])
    {

        document.getElementById("demo").innerText =`Hi!${acc[0].username}`  ;
    }
}

