$(document).ready(function(){
    // navi 전체가 나오는 코드
    // $(".navi > li").mouseover(function(){
    //     $(".submenu").stop().slideDown(500)
    // })
    // .mouseout(function(){
    //     $(".submenu").stop().slideUp(500)
    // })

// navi에 해당하는 submenu가 나오는 코드
$(".navi > li").mouseover(function(){
    // console.log(this);
    $(this).find(".submenu").stop().slideDown(500)
})
$(".navi > li").mouseout(function(){
    // console.log(this);
    $(this).find(".submenu").stop().slideUp(500)
})
    // 이미지 슬라이드 기능
    setInterval(function(){
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft : -1200});
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft : -2400});
        $(".slidelist").delay(2000);
        $(".slidelist").animate({marginLeft : 0});
        $(".slidelist").delay(2000);
    })


    // tapmenu 눌렸을 때 눌린 쪽만 색이 변하고 내용 나옴. 안눌린쪽은 기본색으로 돌아감.
    $(function(){
        $(".tabmenu>li>a").click(function(){
            // console.log(this);
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })

    // 모달 띄우기 기능 (tab에 첫번째 항목(.popup 클릭시))
    $(".popup").click(function(){
        $(".modal").addClass("active")
    })

    // 모달창 닫기(.close) 기능
    $(".close").click(function(){
        $(".modal").removeClass("active")
    })


})
