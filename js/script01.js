$(function(){
    //alert("aaa");

    //슬라이드 메뉴
    $('.nav li').hover(
        function(){
            $('.nav .sub').stop(true,true).slideDown();
        },
        function(){
            $('.nav .sub').stop(false,false).slideUp();
        }
    );

    //슬라이드 이미지
    var banner = $('#banner ul li');
    var current = 0;
    var timer;

    function move(tg, start, end, op1, op2){
        tg.css({left:start,opacity:op1}).stop().animate({left:end,opacity:op2},500);
    };

    timer=setInterval(function(){
        var prev = banner.eq(current);
        move(prev, '0%', '-100%', 1,0);
        current++;
        if(current == banner.size()){current = 0;};
        var next = banner.eq(current);
        move(next, '100%', '0%', 0,1);
    },1000);
    banner.hover(
        function(){
            clearInterval(timer);
        },
        function(){
            timer=setInterval(function(){
                var prev = banner.eq(current);
                move(prev, '0%', '-100%', 1,0);
                current++;
                if(current == banner.size()){current = 0;};
                var next = banner.eq(current);
                move(next, '100%', '0%', 0,1);
            },1000);
        }
    );

    //텝메뉴
    var tab = $('.tab ul li');
    var content = $('.tab_content>div');
    content.hide();
    content.eq(0).show();
    tab.click(function(e){
        e.preventDefault();
        var tg = $(this);
        var i = tg.index();
        tab.removeClass('active');
        tg.addClass('active');
        content.css('display','none');
        content.eq(i).css('display','block');
    });

    //팝업창
    $('.popup').click(function(){
        $('#pop').fadeIn();
    });
    $('.button').click(function(){
        $('#pop').fadeOut();
    });
});