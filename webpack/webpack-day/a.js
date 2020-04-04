function number() {
  var div = document.createElement("div")
  div.setAttribute("id", "number")
  div.innerHTML = 2020 + "加油"
  document.body.appendChild(div)
}

export default number