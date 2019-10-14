//9*9的空表，请自行编写这段代码
//倒九九乘法空表
str = '<table border="1">'
str += '<td>' + j + '*' + i + '= ' + (j * i) + '</td>'
        str += '<td>&nbsp;</td>'
      
str += '</tr>'

str += '</table>'
document.getElementById('table1').innerHTML = str

str = '<table border=“1">'
for(let i = 9;i>0;--i){
    str += '<tr>'
    for(var j =i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }     
str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str
//倒九九乘法表，请自行编写这段代码

str = '<table border="1>'
for(var z = 1;z<10;++z){
    str += '<tr>'
    for(var x =1;x<=z;++x){
        str += '<td>&nbsp;</td>'
    }     
str += '</tr>'
}
str += '</table>'
document.getElementById('table3').innerHTML = str