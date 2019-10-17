const wrap = document.getElementById('wrap');
let images = [
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
]
let count = 0;
images.sort((a, b) => 0.5 - Math.random());

init();
const allImg = document.querySelectorAll('#wrap img');

function init() {
    for (let i = 0; i < 12; i++) {
        //  <img src="" alt="" class="">
        let img = document.createElement('img');
        img.src = "./image/bg.jpg";
        //点击事件
        img.onclick = function() {
            changeImage(img, i);
        }
        wrap.appendChild(img);
    }
}
let firstCard = null;
let firstId = null;

function changeImage(imgNode, i) {
    // imgNode.src = './image/h1.jpg';
    if (count === 0) {
        firstCard = images[i];
        firstId = [i];
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
    }
    if (count === 1 && i === firstId) return; //同一个图片点两次不让进行
    if (count === 1) {
        //翻第二张
        imgNode.src = images[i];
        imgNode.classList.add('rotate-animation');
        setTimeout(() => {

            //开始
            if (firstCard === images[i]) {
                //删除;移除
                wrap.removeChild(allImg[firstId]);
                wrap.removeChild(allImg[i]);
            } else {
                //2
                allImg[firstId].className = ''; //类名重新加载
                allImg[firstId].src = './image/bg.jpg';
                allImg[i] = '';
                allImg[i].src = './image/bg.jpg';
            }
            count = 0;
            firstId = null;
            firstCard = null;
            //结束
        }, 1100);
    }
    count++;
}
// console.log(i, images);

var obj = { a: 1 };


var arr = [1, 2, 3, 4, 5];
//排序 a-b降序 b-a升序
//升序: arr.sort((a, b)=> a - b);
//降序: arr.sort((a, b)=> b - a);
//乱序: 随机排序 伪随机 不是真随机
arr.sort((a, b) => 0.5 - Math.random());
console.log(arr);