function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();

$(function () {
    var sidelist = MaoGePing.plist(0, "").list;
    var plist = "<option value=\"0\">门店查询</option>";
    for (var k = 0; k < sidelist.length; k++) {
        plist += "<option lng=\"" + sidelist[k].Longitude + "\" lat=\"" + sidelist[k].Latitude + "\" value=\"" + sidelist[k].ProvinceID + "\">" + sidelist[k].ProvinceName + "</option>";
    }
    $('.otherLinkSel').html(plist);

    $('.otherLinkSel').change(function () {
        window.location.href = "/store?province=" + $(this).val();
    });

    $(".edmBtn").click(function () {
        var mail = $('.edmTxt').val();
        if (mail == "" || mail == "请输入您的邮箱") {
            alert("请输入邮箱地址！");
            $(".edmTxt").focus();
            return;
        }
        if (!mail.match(/^([.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
            alert("邮箱格式不正确！请重新输入！建议使用知名邮箱方便识别。");
            $(".edmTxt").focus();
            return;
        }
        var json = MaoGePing.addmail(mail);
        if (json.flag == "1") {
            alert(json.message);
            $('.edmTxt').val("");
        } else {
            alert(json.message);
            return;
        }
    });

    $('.btn_ok').click(function () {
        var mail = $('.txtpassword').val();
        if (mail == "") {
            alert("请输入邮箱地址！");
            $(".txtpassword").focus();
            return;
        }
        if (!mail.match(/^([.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
            alert("输入口令不正确！");
            $(".txtpassword").focus();
            return;
        }
        var info = MaoGePing.maillist(mail);
        var list = "";
        if (info.flag == 1) {
            $('.Password').hide();
            $('.listmail').show();
            var json = MaoGePing.maillist(mail).list;
            for (var i = 0; i < json.length; i++) {
                list += "<span>" + json[i].Email + ";</span>";
            }
            $('.listmail').html(list);
        } else {
            alert(info.message);
            return;
        }
    });

    $(".searchBtn").click(function () {
        var key = $.trim($(".navSearch").val());
        if (key == "" || key == "搜索产品") {
            alert("请输入搜索关键词！");
            return;
        }
        location.href = "/search?keyword=" + key;
    });

    $(".nsBtn").click(function () {
        var key = $.trim($(".nsTxt").val());
        if (key == "" || key == "搜索产品") {
            alert("请输入搜索关键词！");
            return;
        }
        location.href = "/search?keyword=" + key;
    });

    $('.navSearch').keyup(function (event) {
        if (event.keyCode == 13) {
            if (event.keyCode == 13) {
                $(".searchBtn").trigger("click");
            }
        }
    });

    $('.nsTxt').keyup(function (event) {
        if (event.keyCode == 13) {
            if (event.keyCode == 13) {
                $(".nsBtn").trigger("click");
            }
        }
    });
});