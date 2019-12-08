//声明变量（目标）
let obj = new Date();
//最小值  目标 获取分钟数 
let min = obj.getMinutes();
//声明一个结束定时器 设置整点秒杀的结束时间
let endseconds = new Date().getTime() + 60 * 1000 * (60-min);
//声明变量保存剩余的时间
let d = h = m = s = 0;
//设置定时器，实现限时秒杀效果
let id = setInterval(seckill, 100);
//功能    秒杀
function seckill() {
//        现在                     获取当前时间
    let nowtime = new Date();
//        剩下的                                                          获取时间差，单位秒
    let remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
//判断秒杀是否过期
    if (remaining > 0) {
//计算剩余天数（除以60*60*24取整，获取剩余天数）
        d = parseInt(remaining / 86400);
//计算剩余小时（除以60*60转换为小时，与24取模，获取剩余小时）
        h = parseInt((remaining / 3600) % 24);
//计算剩余分钟（除以60转换为分钟，与60取模，获取剩余分钟）
        m = parseInt((remaining / 60) % 60);
//计算剩余秒（与60取模，获取剩余秒数）
        s = parseInt(remaining % 60);
//统一利用两位数表示剩余的天、小时、分钟、秒
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else {
//         清除间隔               秒杀过期，取消定时器
        clearInterval(id);
        d = h = m = s = '00';
    }
//     文件  获取 电子邮箱         内部HTML             将剩余的天、小时、分钟和秒显示到指定网页中
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}
















































/*
let endseconds = new Date();
let d = h = m = s = 0;
d;
h;
m = 59 - endseconds.getMinutes();
s = 59 - endseconds.getSeconds();
let id = setInterval(seckill, 1000);
function seckill() {
    s--;
    if (s == -1) {
        s = 59;
        m--;
    }
    if (m == -1) {
        m = 59;
    }
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}
*/



























/*
//窗口   在线   功能
window.onload=function(){
//  哪里   倒计时    文件   获取 电子邮箱
    var countdown=document.getElementById('countdown');
//       未来数据  新的 数据
    var futureDate=new Date('2019/12/24 12:00:00');
//   设置间隔
    setInterval(function(){
//           当前数据
        var currentDate=new Date();
//           当前时间                获取时间
        var currentTime=currentDate.getTime();
//           未来时间
        var futureTime=futureDate.getTime();
//           剩余时间     未来时间 减 当前时间
        var surplusTime=futureTime-currentTime;
//           剩余   秒    解析 接口  剩余时间   除
        var surplusSecond=parseInt(surplusTime / 1000);
//          天             剩余   秒  
        var day=parseInt(surplusSecond / 3600 / 24);
//          小时
        var hours=parseInt(surplusSecond / 3600 % 24);
//          分钟
        var minutes=parseInt(surplusSecond / 60 % 60);
//          秒
        var seconds=parseInt(surplusSecond % 60);
//                 内  文本
        countdown.innerText=day + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    },1000);
}
*/