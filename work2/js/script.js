$(function(){
  $('.gnb > li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(800);
    $(this).css({background:'#fff'}).children('a').css({color:'#333', fontWeight:'bold'})
      }); //gnb li mouseover end
  $('.gnb > li').mouseout(function(){
  	$(this).css({background:'transparent'}).children('a').css({color:'#fff',fontWeight:'normal'})
    $('.sub').stop().slideUp()
  }); // gnb li mouseout end
  $('.sub li').mouseover(function(){
    $(this).css({background:'rgba(255,255,255,0.7)',height:'40px',lineHeight:'40px'}).children('a').css({color:'#000',fontWeight:'bold'});
  });//sub li end
  $('.sub li').mouseout(function(){
    $(this).css({background:'rgba(0,0,0,0.7)',height:'30px',lineHeight:'30px'}).children('a').css({color:'#fff',fontWeight:'normal'});
  });//sub li end
  $('.slide > li > button').hover(function(){
    $(this).css({background:'#fff'})
  },function(){
  	$(this).css({background:'transparent'})
  });//slide li hover event

  $('.cb1 > a').hover(function(){
  	$(this).css({background:'#fff',color:'#000',fontWeight:'bold'});
  },function(){
  	$(this).css({background:'transparent',color:'#fff',fontWeight:'normal'});
  })
  $('.cb2 > button, .cb3 > button').hover(function(){
  	$(this).css({background:'#fff',color:'#000',fontWeight:'bold'});
  },function(){
  	$(this).css({background:'transparent',color:'#fff',fontWeight:'normal'})
  })

  let count = 0;
  $('.cb2 > button').click(function(){
  	$('.subcontents1 > div').hide();
    count++
    if(count<=1){
  	$('.subcontents > div').stop().slideDown();
  	$('.cb2 .arrow').stop().slideDown(1000);
  }else if(count<=2){
  	$('.subcontents > div').stop().slideUp();
  	$('.arrow').slideUp()
  	count=0;
  }
  })
  $('.cb3 > button').click(function(){
  	$('.subcontents > div').hide()
   count++
    if(count<=1){
  	$('.subcontents1 > div').stop().slideDown();
  	$('.cb3 .arrow').stop().slideDown(1000);

  }else if(count<=2){
  	$('.subcontents1 > div').stop().slideUp();
  	$('.arrow').slideUp()
  	count=0;
  }
  })
//slide 
setInterval(function(){
  $('.slide').animate({marginLeft:'-100%'},800,function(){
  $('.slide li:first').appendTo('.slide');
  $('.slide').css('margin-left',0);
});
},3000)


//sub3 view 
$('.view li').click(function(){
	$('.view li').removeClass('borderef');
	$(this).addClass('borderef');
})
let i=0;
$('.prev').click(function(){
  i++
  $('.slideimg li:last').prependTo('.slideimg')
  $('.slideimg').css({marginLeft:'-26%'})
  $('.slideimg').animate({marginLeft:0},800)
});
$('.next').click(function(){
  i++
  $('.slideimg').animate({marginLeft:'-26%'},800,function(){
    $('.slideimg li:first').appendTo('.slideimg');
    $('.slideimg').css('margin-left',0);
  });
})
$('.slideimg li').click(function(){
  const imgsrc = $(this).children('img').attr('src');
  $('.viewBox > img').attr('src',imgsrc);
  const imgspan = $(this).children('.nameBox').children('.name').text();
  $('.viewBox > span').html(imgspan);
  const imgp = $(this).children('.nameBox').children('p').text();
  $('.viewBox > p').html(imgp);
})
  if($(window).width() < 610){
    let cnt = 0;
    $('.cb2').click(function(){
      cnt++
      if(cnt <= 1){
      $('.cb3').hide();
    }else {
      $('.cb3').show();
      cnt = 0;
    }
    });
  }
});//ready function