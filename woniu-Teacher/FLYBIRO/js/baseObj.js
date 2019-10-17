var baseObj = {
    //随机数
    randowNum: function(min, max) {
        //parseInt
        return parseInt(Math.random() * (max - min + 1) + min)
    },

    // 两个矩形元素之间的碰撞检测
    rectangleCrashExamine: function(obj1, obj2) {
        var objiLeft = obj1.offsetLeft
        var obj2Left = obj2.offsetLeft + obj1.offsetLeft
        var objiTop = obj1.offsetTop
        var objHeight = obj1.offsetTop + obj1.ofHeight

        var obj2Left = obj2.offsetLeft
        var obj2Width = obj2.offsetLeft + obj2.offsteWidth
        var obj2Top = obj2.offsetTop
        var obj2Height = obj2.offsetTop + obj2.ofHeight

        if (!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
            return true
        }
        return false
    }
}