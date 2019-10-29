function goldbach() {
    var value = document.getElementById('odd').value
<<<<<<< HEAD
    if (value % 2 !== 0) {
        alert("请输入偶数")
    }
    let goldbach = document.getElementById('goldbach')
    var arr = []
    var a = 0;
    for (var i = 2; i <= value; i++) {
        a = 0
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                a++
            }
        }
        if (a == 0) {
=======
    if(value%2!==0){
        alert("请输入偶数")
    }
    let goldbach = document.getElementById('goldbach')
    var arr =[]
    var a = 0;
    for(var i=2;i<=value;i++){
        a = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
>>>>>>> b32997ab2bfddc29417bf2ef01ddcf00296670d1
            arr.push(i)
        }
    }
    var str = ''
<<<<<<< HEAD
    for (let i = 0; i < (arr.length) / 2; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === Number(value)) {
                str += '<div>' + value + "可以拆分为两个质数" + arr[i] + "与" + arr[j] + "的和" + '</div>'
            }
        }
=======
    for(let i=0;i<(arr.length)/2;i++){
       for(let j=0;j<arr.length;j++){
           if((arr[i]+arr[j])===Number(value)){
               str += '<div>'+value+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+ '</div>'
           }
       }
>>>>>>> b32997ab2bfddc29417bf2ef01ddcf00296670d1
    }
    goldbach.innerHTML = str
}