str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=9;j>0;--j){
        //;并接单元格
        str += '<td>&nbsp;</td>'
   }   
   str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table1').innerHTML = str

str = '<table border=“1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j =i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }     
str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        //;并接单元格
        str += '<td>' + j + '*' + i + '=' + ( j * i ) + '</td>'
   }   
   str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table3').innerHTML = str
