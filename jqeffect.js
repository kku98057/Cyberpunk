$(document).ready(function () {

    let s2width = $('.s2_list_slide').width();
    let i = 0; //s2 이미지 슬라이드
    let j = 0; //s3 이미지 슬라이드
    

// 버튼 클릭 시 입장
    $('#goBtn').click(function () {
        $('.justy').addClass('justy_showing');
        $('.align').addClass('align_showing');
        setTimeout(function () {
            $('body').css({
                height: 'auto',
            });
            $('html').css({
                overflowY: 'scroll'
            })
            $('.main_bg_pic').addClass('fly_showing');
        }, 2500);

    });

    // s2 클릭 시 이미지 변경 
    $('.top_wrap li').each(function (index) {
        $(this).attr('s2-data', index);
    });
    $('.list_wrap li').each(function (index) {
        $(this).attr('s2-data', index);
    }).click(function () {
        let s = $(this).attr('s2-data');
        $('.top_wrap li').removeClass('s2_showing');
        $('.top_wrap li').eq(s).addClass('s2_showing');

    });
    
    $('#left').click(function(){
        
        if(i==0){
            $('.list_wrap').animate({
                left:'-320px'
            })
            i++;
            console.log(i);
        }else if(i==1){
            $('.list_wrap').animate({
                left:'0'
            })
            i=0;
            console.log(i);
        }
    });
    $('#right').click(function(){
        if(i==0){
            $('.list_wrap').animate({
                left:'320px'
            })
            i=1;
            console.log(i);
        }else if(i==1){
            $('.list_wrap').animate({
                left:'0'
            })
            i--;
            console.log(i);
        }
    });



    // s3 메뉴변경 
    $('.s3_data_wrap').each(function (index) {
        $(this).attr('s3-data', index);
    });
    $('.s3data').each(function (index) {
        $(this).attr('s3-data', index);
    });
    $('.s3_menu_wrap button').each(function (index) {
        $(this).attr('s3-data', index);
    }).click(function () {

        let s2d = $(this).attr('s3-data');

        $('.s3data').fadeOut(0);
        $('.s3data').eq(s2d).fadeIn(0);
        $('.s3_data_wrap').removeClass('h_showing');
        $('.s3_data_wrap').eq(s2d).addClass('h_showing');
    });

    $('.video_top iframe').each(function (index) {
        $(this).attr('s3-video', index);
    });
    $('.video_bottom li').each(function (index) {
        $(this).attr('s3-video', index);
    }).click(function () {
        let vi = $(this).attr('s3-video');

        $('.video_top iframe').removeClass('s3_showing');
        $('.video_top iframe').eq(vi).addClass('s3_showing');
    });
    $('#s3Left').click(function(){
        if(j==0){
            $('.video_bottom').animate({
                left:'-960px'
            })
            j++;
            console.log(j);
        }else if(j==1){
            $('.video_bottom').animate({
                left:'-640px'
            })
            j++;
            console.log(j);
        }else if(j==2){
            $('.video_bottom').animate({
                left:'-320px'
            })
            j++;
            console.log(j);
        }else if(j==3){
            $('.video_bottom').animate({
                left:'0'
            })
            j=0;
            console.log(j);
        }
    });
    $('#s3Right').click(function(){
        if(j==0){
            $('.video_bottom').animate({
                left:'-320px'
            })
            j=3;
            console.log(j);
        }else if(j==1){
            $('.video_bottom').animate({
                left:'0'
            })
            j--;
            console.log(j);
        }else if(j==2){
            $('.video_bottom').animate({
                left:'-960px'
            })
            j--;
            console.log(j);
        }else if(j==3){
            $('.video_bottom').animate({
                left:'-640px'
            })
            j--;
            console.log(j);
        }
    });

});

