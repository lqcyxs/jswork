function stat() {
  let str = document.getElementById("str").value
  let obj = {}
  let dw = str.split("")
  dw = dw.sort()
  for (let i = 0; i < str.length; i++) {
    let dm = dw[i]
    obj[dm] = (obj[dm] + 1) || 1;
  }
  document.getElementById('result').innerText = JSON.stringify(obj)
}