$(function() {
    // banner 切换
    (function() {
        var banner = $('#banner'),
            pic_c = banner.find('.pics'),
            pics = pic_c.children(),
            idx_c = banner.find('.idxs'),
            idxs = idx_c.children(),
            btns = banner.find('.btns a'),
            prev = btns.filter('.prev'),
            next = btns.filter('.next'),

            len = pics.length,
            idx = 0,
            prev_i = -1,
            max_i = len - 1,
            curr_p = pics.eq(idx),
            curr_i = idxs.eq(idx),
            delay = 5000,
            timeout = -1;

        win.on('load', function() {
            idx_recu(0, 1500 / len, function() {
                setTimeout(function() {
                    curr_i.addClass('on');
                    auto();
                }, 300);
                idxs.hover(hover);
            });
            banner.hover(function() {
                // prev.stop().fadeIn(300);
                // next.stop().fadeIn(300);
                btns.addClass('on');
            }, function() {
                btns.removeClass('on');
                // prev.stop().fadeOut(300);
                // next.stop().fadeOut(300);
            });
            prev.on('click', function() { fade(idx === 0 ? idx = max_i : --idx) });
            next.on('click', function() { fade(idx === max_i ? idx = 0 : ++idx) });
        });

        function fade(idx) {
            clearTimeout(timeout);
            prev_i = idx;
            curr_p.stop(false, true).fadeOut(300);
            curr_p = pics.eq(idx).stop(false, true).fadeIn(300);
            curr_i.removeClass('on');
            curr_i = idxs.eq(idx).addClass('on');
            auto();
        }

        function hover() {
            idx = $(this).index();
            if (idx === prev_i) return;
            fade(idx);
        }

        function idx_recu(idx, delay, func) {
            temp = idxs.eq(idx);
            if (temp.length) {
                temp.css('margin-top', 0).fadeIn(500);
                setTimeout(function() {
                    idx_recu(idx + 1, delay, func);
                }, delay);
            } else {
                func();
                return;
            }
        }

        function auto() {
            timeout = setTimeout(function() {
                fade(idx === max_i ? idx = 0 : ++idx);
            }, delay);
        }
    }());
});

jQuery(function($) {
    $("#warning").click(function() {
        $("#bsWXBox").show();
    });
    $(".bsClose").click(function() {
        $("#bsWXBox").fadeOut();
    })

    $(".slideBox").switchTab({ trigger: "click", delayTime: 10 });

    $(".slideBox2").switchTab({ trigger: "click", delayTime: 10 });
    //

});
$(function() {
    $(".topImg").click(function() {
        getVideoWidth()
    })
    $(window).resize(function(event) {
        getVideoWidth()
    });
})
function getVideoWidth() {
    var w = $(window).width();
    if (w >= 992) {
        $('.popVideo').css({
            "width": "800px",
            "height": "450px",
            "margin": "-225px 0 0 -400px"
        });
        $("#popVideo").css({
            "width": "800px",
            "height": "450px",
        });
    } else if (w >= 500 && w < 992) {
        $('.popVideo').css({
            "width": "485px",
            "height": "350px",
            "margin": "-175px 0 0 -242px"
        });
        $("#popVideo").css({
            "width": "485px",
            "height": "350px"
        });
    } else if (w < 500) {
        $('.popVideo').css({
            "width": "285px",
            "height": "250px",
            "margin": "-125px 0 0 -155px"
        });
        $("#popVideo").css({
            "width": "285px",
            "height": "250px"
        });
    }
}
