
$('.bottomNav>.nav1>li').hover(
    function (){
        $('>a>div>span:nth-of-type(2)',this).removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
        $('.subMenu',this).slideDown(100).css({
      'zIndex':'2'
  });
     },
    function (){
        $('>a>div>span:nth-of-type(2)',this).removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
        $('.subMenu',this).slideUp(100);
    }
)

let flag=true;

$('.boxT>div>h1').click(function (){
    if (flag===true){
        $('>a>span:nth-of-type(2)',this).removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
        $(this).siblings('ul').slideDown(200);
        flag=false;
    }else {
        $('>a>span:nth-of-type(2)',this).removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
        $(this).siblings('ul').slideUp(200);
        flag=true;
    }
});

$('.open').click(function (){

       $('.boxNav').css({
           'display':'block'
       })

})
$('.close').click(function (){

    $('.boxNav').css({
        'display':'none'
    })


})

$('.searchBox').hover(
    function (){
        $('>a>img',this).attr('src','images/mci/mymci%202.svg')
    },
    function (){
        $('>a>img',this).attr('src','images/mci/mymci.svg')
    },
)

$('.newItem').hover(
    function (){
        $('.one',this).css({
            opacity:1
        })
        $('.two',this).css({
            right:'15px'
        })
        $('.more',this).css({
            fontSize:'14px',
            color:'rgba(0,0,0,.5)'
        })
    },
    function (){
        $('.one',this).css({
            opacity:0
        })
        $('.two',this).css({
            right:'0px'
        })
        $('.more',this).css({
            fontSize:'17px',
            color:'#fff'
        })
    }
)


$(".searchBox").click(function (){
    $(".cover").fadeIn(200);
    $('.searchShow').removeClass('comeBack').addClass('animate').css({
        'top':'calc(50% - 150px)'
    });
})

$(".searchClose").click(function (){
    $(".searchShow").removeClass('animate').addClass('comeBack').css({
        'top':'-1000px'
    });
    $(".cover").fadeOut(1000);
})