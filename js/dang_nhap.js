var correct_user = 'freshfood';
var correct_pass = '12345';

var userName = document.getElementById('user');
var passWord = document.getElementById('pass');

var form = document.getElementById('form');

if (form.attachEvent) {
    form.attachEvent('submit', onFormSubmit);
} else {
    form.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var user = userName.value;
    var pass = passWord.value;
    if (user == "") {
        alert("Vui lòng nhập tên đăng nhập!")
    } else if (pass == "") {
        alert("Vui lòng nhập mật khẩu!")
    } else {
        if (user == correct_user && pass == correct_pass) {
            alert("Đăng nhập thành công!");
            window.location = "index.html";
        } else if (user != correct_user) {
            alert("Sai tên đăng nhập!");
            location.reload();
        } else {
            alert("Sai mật khẩu!");
            location.reload();
        }
    }

}