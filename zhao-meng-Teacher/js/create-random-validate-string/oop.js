// 抽象
const width = 200,
    heigth = 40;
class Gcode {
    constructor(el) {
            this.$el = document.getElementById(el);
            this.ctx = this.$el.getContext('2d');
            this.$el.width = width;
            this.$el.heigth = heigth;
            console.log(heigth, width);
            this.drawLine();
            this.drawText();
            let that = this;
            this.$el.addEventListener('click', function() {
                that.ctx.clearRect(0, 0, width, heigth);
                that.drawLine();
                that.drawText();

            })
        }
        // this.$el.addEventListener('click', ()=> {
        //    this.ctx.clearRect(0, 0, width, heigth);
        //    this.drawLine();
        //    this.drawText();
        // })


    drawLine() {
        for (let i = 0; i < 6; i++) {
            let baginX = Math.random() * 200;
            let baginY = Math.random() * 50;
            let endX = Math.random() * 200;
            let endY = Math.random() * 50;
            this.ctx.beginPath();
            this.ctx.moveTo(baginX, baginY);
            this.ctx.lineTo(endX, endY);
            this.ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            this.ctx.stroke();
        }
    }

    drawText() {
        var sourceText = ['a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'o', 'p',
                'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z'
            ]
            //4 个不重复
        let result = [];
        for (let i = 0; i < 4; i++) {
            const idx = Math.floor(Math.random() * sourceText.length); //随机取整
            result.push(sourceText[idx]);
            //删除重复
            sourceText.splice(idx, 1);
        }
        console.log('result', result)
        for (let i = 0; i < result.length; i++) {
            //
            this.ctx.font = '40px Helvetica';
            this.ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            this.ctx.textBaseLine = 'middle'; // top bottom
            let prewidth = width / 4 - 10; // 宽度分为四份 不能挨边
            this.ctx.fillText(result[i], Math.random() * prewidth + i * prewidth, heigth / 2)
        }
    }

}
//实例
let obj = new Gcode('screen');
let obj2 = new Gcode('screen1');
let obj1 = new Gcode('screen2');