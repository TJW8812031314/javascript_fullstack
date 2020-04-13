var XMLHttpFactory = function() {} //这是一个简单的工厂

XMLHttpFactory.createXMLHttp = function () {
  var XMLHttp = null
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTp")
  }
  return XMLHttp
}// XMLHttpFactory.createXMLHttp() 让这个方法根据当前的环境的具体情况来返回XHR对象

var AjaxHander = function () {
  var XMLHttp = XMLHttpFactory.createXMLHttp() // 具体操作
}