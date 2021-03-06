$(function () {
    if( !window.localStorage.skin ) {
        window.localStorage.skin = "skin1.css";
    }

    $("#css1").attr("href", "css/"+window.localStorage.skin);
    $("#mainIframe").contents().find("#css2").attr("href", "../css/"+window.localStorage.skin);
    $("#mainIframe").contents().find("#css1").attr("href", "../../../css/"+window.localStorage.skin);

    // 皮肤切换
    $("#b1").click(function() {
        $("#css1").attr("href", "css/skin1.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin1.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin1.css");
    });
    $("#b2").click(function() {
        $("#css1").attr("href", "css/skin2.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin2.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin2.css");
    });
    $("#b3").click(function() {
        $("#css1").attr("href", "css/skin3.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin3.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin3.css");
    });
    $("#b4").click(function() {
        $("#css1").attr("href", "css/skin4.css");
        $("#mainIframe").contents().find("#css2").attr("href", "../css/skin4.css");
        $("#mainIframe").contents().find("#css1").attr("href", "../../../css/skin4.css");
    });


    $('.skin .skin-button button').on('click',function(){
        switch($(this).attr('id')) {
            case "b1" :
                window.localStorage.skin = "skin1.css";
                break;
            case "b2" :
                window.localStorage.skin = "skin2.css";
                break;
            case "b3" :
                window.localStorage.skin = "skin3.css";
                break;
            case "b4" :
                window.localStorage.skin = "skin4.css";
                break;
        }

    })

    // 回到顶部
    $(".rocket-top").click(function () {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300);
    })

     //侧边栏点击显示隐藏
    $(document).on('click','.in-side-toogle',function(){
        var in_sideul = $('.in-side');

        if ( in_sideul.css('height') == "40px" ) {
            $('.in-side').animate({
                height: "100%"
              }, 500 );
            $('.side-list').fadeIn(500);
        } else {
            $('.in-side').animate({
                height: "40px"
              }, 500 );
            $('.side-list').fadeOut(300);
        }
    });
    //声音设置
 $(function () {
        var currentUsername = "测试001"
        function setChecked(name,checked) {
            $('input[name="'+name+'"]').each(function() {
                $(this).attr('checked', checked);
            });
        }
        function setDefaultVoice() {
            var chk_open_voice = localStorage.getItem(currentUsername+'_chk_open_voice');
            var chk_win_voice = localStorage.getItem(currentUsername+'_chk_win_voice');
            var chk_message_voice = localStorage.getItem(currentUsername+'_chk_message_voice');
            if(chk_open_voice==null){localStorage.setItem(currentUsername+'_chk_open_voice','true');}
            if(chk_win_voice==null){localStorage.setItem(currentUsername+'_chk_win_voice','true');}
            if(chk_message_voice==null){localStorage.setItem(currentUsername+'_chk_message_voice','true');}
        }
        $("#voice-set").click(function () {
            $('.voice-set-mask').fadeIn(300);
            $('.voice-model').slideDown(500);
            var chk_open_voice = localStorage.getItem(currentUsername+'_chk_open_voice');
            var chk_win_voice = localStorage.getItem(currentUsername+'_chk_win_voice');
            var chk_message_voice = localStorage.getItem(currentUsername+'_chk_message_voice');
            setChecked('chk_open_voice',chk_open_voice=='true');
            setChecked('chk_win_voice',chk_win_voice=='true');
            setChecked('chk_message_voice',chk_message_voice=='true');
        });
        $("input[name='chk_open_voice']").change(function () {
            if($(this).is(':checked')){
                localStorage.setItem(currentUsername+'_chk_open_voice','true');
            }else{
                localStorage.setItem(currentUsername+'_chk_open_voice','false');
            }

        });
        $("input[name='chk_win_voice']").click(function () {
            if($(this).is(':checked')){
                localStorage.setItem(currentUsername+'_chk_win_voice','true');
            }else{
                localStorage.setItem(currentUsername+'_chk_win_voice','false');
            }
        });
        $("input[name='chk_message_voice']").click(function () {
            if($(this).is(':checked')){
                localStorage.setItem(currentUsername+'_chk_message_voice','true');
            }else{
                localStorage.setItem(currentUsername+'_chk_message_voice','false');
            }
        });
        $('.voice-close').click(function () {
            $('.voice-set-mask').fadeOut(300);
            $('.voice-model').slideUp(500);
        });
        setDefaultVoice();
    });

    

});
