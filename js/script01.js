$(function(){
    $('.menu>ul>li').hover(
        function(){
            $('.menu .sub').stop().slideDown();
        },
        function(){
            $('.menu .sub').stop().slideUp();
        }
    );
    
     //팝업
     $('.tab_content>div>ul>li').click(
         function(){
            $('#popup').fadeIn();
        }
    );
    $('.pop>.button').click(
        function(){
           $('#popup').fadeOut();
       }
   );

   //텝메뉴
    var tab = $('.tab ul li');
    var content = $('.tab_content>div');
    content.hide().eq(0).show();
    tab.click(function(event){
        event.preventDefault();
        var tg =  $(this);
        var i  = tg.index();
        tab.removeClass('active');
        tg.addClass('active');
        content.css('display','none');
        content.eq(i).css('display','block');
    });

    //슬라이드
    var banner = $('#banner ul li');
    var current = 0;
    var timer;

    function move(tg,start,end){
        tg.css('top',start).stop().animate({top:end},500);
    };
    timer=setInterval(function(){
        var prev = banner.eq(current);
        move(prev,'0%','-100%');
        current++;
        if(current == banner.size()){current =0;};
        var next = banner.eq(current);
        move(next,'100%','0%');
    },1000);
    banner.hover(
        function(){
            clearInterval(timer);
        },
        function(){
            timer=setInterval(function(){
                var prev = banner.eq(current);
                move(prev,'0%','-100%');
                current++;
                if(current == banner.size()){current =0;};
                var next = banner.eq(current);
                move(next,'100%','0%');
            },1000);
        }
    );
});