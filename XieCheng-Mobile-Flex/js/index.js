window.addEventListener('load', function() {
    let focus = document.querySelector('.focus')
    let ul = focus.children[0]
    let ol = focus.querySelector('ol')
    let w = focus.offsetWidth;
    let index = 0;
    let moved = false;
    let timer = setInterval(function() {
            index++
            let translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = `translateX(${translatex}px)`;
        }, 2000)
        // 过渡完成之后在判断, transitionend监听过渡完成
    ul.addEventListener('transitionend', function() {
            if (index >= ul.children.length - 2) {
                index = 0;
                ul.style.transition = 'none';
                let translatex = -index * w;
                ul.style.transform = `translateX(${translatex}px)`;
            } else if (index < 0) {
                index = ul.children.length - 3;
                ul.style.transition = 'none';
                let translatex = -index * w;
                ul.style.transform = `translateX(${translatex}px)`;
            }
            console.log(index)
            ol.querySelector('.current').classList.remove('current')
            ol.children[index].classList.add('current')
        })
        // 手指滑动轮播图
        // 触摸元素, 获取手指的初始坐标 touchstart
    let startx = 0;
    let movex = 0;
    ul.addEventListener('touchstart', function(e) {
        startx = e.targetTouches[0].pageX;
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function(e) {
        movex = e.targetTouches[0].pageX - startx;
        ul.style.transition = 'none';
        let translatex = -index * w + movex;
        ul.style.transform = `translateX(${translatex}px)`;
        moved = true;
        // 阻止滚动屏幕的行为
        e.preventDefault()
    })
    ul.addEventListener('touchend', function(e) {
        if (moved) {
            if (Math.abs(movex) > 50) {
                // 右滑播放上一张 > 0, 左滑播放下一张 < 0
                movex > 0 ? index-- : index++;
                ul.style.transition = 'all .3s';
                let translatex = -index * w;
                ul.style.transform = `translateX(${translatex}px)`;
            } else {
                ul.style.transition = 'all .1s';
                let translatex = -index * w;
                ul.style.transform = `translateX(${translatex}px)`;
            }
        }
        moved = false;
        clearInterval(timer)
        timer = setInterval(function() {
            index++
            let translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = `translateX(${translatex}px)`;
        }, 2000)
    })
})