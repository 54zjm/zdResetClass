// // public.js是所有子页面都要导入的js

// 首页js
$(function() {

    // $("#css1").attr("href", "css/" + window.localStorage.skin);
    $("html").contents().find("#css2").attr("href", "../css/" + window.localStorage.skin);
    $("html").contents().find("#css1").attr("href", "../../../css/" + window.localStorage.skin);

    // 轮播图
    ;(function(){
        var i = 0;
        var clone = $(".banner .img li").first().clone();
        $(".banner .img").append(clone);
        var size = $(".banner .img li").size();
        /*轮播*/
        var t = setInterval(moveL, 5000)
        /*定时器*/
        $(".banner").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(moveL, 5000)
        })
        /*右边按钮*/
        $(".banner .btn-left").click(function() {
            moveL()
        })

        /*左边按钮*/
        $(".banner .btn-right").click(function() {
            moveR()
        })

        function moveL() {
            i++
            if (i == size) {
                $(".banner .img").css({
                    left: 0
                })
                i = 1;
            }
            $(".banner .img").stop().animate({
                left: -i * 935
            }, 500)
            if (i == size - 1) {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            }

            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }

        function moveR() {
            i--
            if (i == -1) {
                $(".banner .img").css({
                    left: -(size - 1) * 935
                })
                i = size - 2;
            }
            $(".banner .img").stop().animate({
                left: -i * 935
            }, 500)
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }
    })();
    

});

// 中奖通告滚动
;(function() {
    //自动播放
    var timer = null;
    var num = 0;

    function go() {
        timer = setInterval(function() {
            num += 1;
            if (num > 116) {
                num = 0;
            }
            $('.up-turn ul').css({ top: -num })
            $('.up-turn ul').delay(2000)
        }, 30)
    };
    go();
    //鼠标移上，鼠标移出
    $('.up-turn').hover(function(e) {
        clearInterval(timer)
    }, function() {
        clearInterval(timer);
        go();
    });
    //突出显示
    $('.up-turn li').hover(function(e) {
        $(this).siblings().stop().fadeTo(300, 0.4);
    }, function() {
        $('.up-turn li').stop().fadeTo(300, 1);
    });

})();

var ifVery = false;
//下拉
$(document).on('click', '.select-show', function() {
    var _this = this.children[1];
    $('.select-list-hide').each(function() {
        if (this != _this && $(this).css('display') == 'block') {
            $(this).slideToggle(100);
        }
    })
    $(this).find('.select-list-hide').slideToggle(100);
});

$(document).on('click', '.select-list-hide li', function() {
    $(this).parent().prev().text($(this).text());
});

$('html').click(function() {
    if (ifVery) {
        $('.select-list-hide').each(function(i) {
            if ($(this).css('display') == 'block') {
                $(this).slideToggle(100);
            }
        });
        ifVery = false;
    }
})

$(document).on('mouseover', '.select-show', function() {
    ifVery = false;
});
$(document).on('mouseout', '.select-show', function() {
    ifVery = true;
})

window.onload = function() {
    var parframe = parent.document.querySelector('iframe');
    // console.log(parframe);
    parframe.style.height = document.body.offsetHeight + 'px';
}

