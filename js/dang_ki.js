function kt() {
    var fullName = document.getElementById('fullName');
    var userName = document.getElementById('user');
    var passWord = document.getElementById('pass');
    var repassWord = document.getElementById('rePass');
    if (passWord.value != repassWord.value) {
        alert("Mật khẩu và nhắc lại mật khẩu chưa trùng nhau!");
        location.reload();
    }
    if (fullName.value != "" && userName.value != "" && passWord.value != "" && repassWord.value != "" && passWord.value == repassWord.value) {
        alert("Bạn đã đăng kí thành công!");
        location.reload();
    } else {
        if (fullName.value == "") {
            document.getElementById('errorName').innerHTML = "*Nhập tên!";
        } else {
            document.getElementById('errorName').innerHTML = "";
        }
        if (userName.value == "") {
            document.getElementById('erroruser').innerHTML = "*Nhập email!";
        } else {
            document.getElementById('erroruser').innerHTML = "";
        }
        if (passWord.value == "") {
            document.getElementById('errorpass').innerHTML = "*Nhập mật khẩu!";
        } else {
            document.getElementById('errorpass').innerHTML = "";
        }
        if (repassWord.value == "") {
            document.getElementById('errorrePass').innerHTML = "*Không để trống!";
        } else {
            document.getElementById('errorrePass').innerHTML = "";
        }
    }

}