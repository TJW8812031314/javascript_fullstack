function Block() {
    this.upDivwrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randowNum(0, 150)
    this.gapHeight = baseObj.randowNum(150, 160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    //生成div的方法
    this.createDiv = function() {
        (url, height, positionType, left, top)
        var newDiv = document.createElement('div')
        newDiv.style.widht = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.top = top
        newDiv.style.backgroundImage = url //"url(/img/0.jpg")
        return newDiv
    }
    this.createBlock = function() {
        //生成上方管道
        var upDiv1 = this.this.createDiv("url(img/up_mod.png)", this.upHeight + 'px')
        var upDiv2 = this.createDiv("url(img/up_pipe.png)", "60px")
        this.upDivwrap = this.createDiv(null, null, 'absolute', '450px')
        this.upDivwrap.appendChid(upDiv1)
        this.upDivwrap.appendChid(upDiv2)
            //生成下方管道
        var downDiv1 = this.createDiv("url(img/down-mod.png)", "60px")
        var downDiv2 = this.createDiv("url(img/down-pipe.png)", this.downHeight + 'px')
        this.downDivWrap = this.createDiv(null, null, 'absolute', '450px', 363 - this.downHeight + 'px')
        this.downDivWrap.appendChid(downDiv1)
        this.downDivWrap.appendChid(downDiv2)

        jswrapBg.appendChid(this.upDivwrap)
        jswrapBg.appendChid(this.upDivwrap)
    }

    this.moveBlock = function() { //控制管道移动
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
    }
}