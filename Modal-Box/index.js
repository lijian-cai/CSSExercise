let link = document.querySelector('#link');
let login = document.querySelector('#login');
let bg = document.querySelector('#bg');
let closeBtn = document.querySelector('#closeBtn');

link.addEventListener('click', function(e) {
    login.style.display = 'block';
    bg.style.display = 'block';
});

closeBtn.addEventListener('click', function(e) {
    login.style.display = 'none';
    bg.style.display = 'none';
});

login.addEventListener('mousedown', function(e) {
    // 鼠标在盒子内的坐标
    let x = e.pageX - login.offsetLeft;
    let y = e.pageY - login.offsetTop;
    login.style.cursor = 'move';

    function move(e) {
        login.style.left = e.pageX - x + 'px';
        login.style.top = e.pageY - y + 'px';
    }
    // 鼠标在页面中的坐标减去鼠标在盒子内的坐标
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', function(e) {
        document.removeEventListener('mousemove', move)
        login.style.cursor = 'default';
    })
});