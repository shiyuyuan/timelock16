/*
 *	项目的js接口文件，这里包含了所有前端交互的js接口，
 *
 */

/** 
 * @type {Object} 
 **/
var MaoGePing = {
    url: '/',
    ver: 1.0,
    base: '',

    /* 
    读取省份列表
    */
    plist: function (id, key) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + '/WebSericesAPI/ProvinceListAPI.ashx',
            'type': 'post',
            'async': false,
            'dataType': 'json',
            'data': { "id": id, "key": key, "r": Math.random() },
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    },
    /* 
    读取城市列表
    */
    citylist: function (id) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + '/WebSericesAPI/CityAPI.ashx',
            'type': 'post',
            'async': false,
            'data': { "id": id, "r": Math.random() },
            'dataType': 'json',
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    },
    /* 
    读取区域列表
    */
    calist: function (id) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + '/WebSericesAPI/AreaStoreAPI.ashx',
            'type': 'post',
            'async': false,
            'data': { "id": id, "r": Math.random() },
            'dataType': 'json',
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    },
    /* 
    读取门店列表
    */
    storelist: function (sid, pid, cid, aid, key) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + '/WebSericesAPI/StoreAPI.ashx',
            'type': 'post',
            'async': false,
            'data': { "sid": sid, "pid": pid, "cid": cid, "aid": aid, "key": key, "r": Math.random() },
            'dataType': 'json',
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    },
    /* 
    添加邮箱
    */
    addmail: function (id) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + 'WebSericesAPI/AddEmail.ashx',
            'type': 'post',
            'async': false,
            'data': { "mail": id, "r": Math.random() },
            'dataType': 'json',
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    },
    maillist: function (id) {
        var returnJson = {};
        $.ajax({
            'url': MaoGePing.base + '/WebSericesAPI/EmailList.ashx',
            'type': 'post',
            'async': false,
            'data': { "mail": id, "r": Math.random() },
            'dataType': 'json',
            'success': function (r) {
                returnJson = r;
            },
            error: function () {
                alert("网络超时，请重试！");
                return false;
            }
        });
        return returnJson;
    }
}