$(function(){
  const menu = $('.gnb li')
  menu.mouseover(function(){
    $(this).siblings('li').children('a').removeClass('ef');
    $(this).children('a').addClass('ef');
    $('.sub, .bg').stop().slideDown(800);
    let lefts=[2,15,29,42,55,69]
    const idx=$(this).index()
    console.log(idx)
    $('.effect').css({left:lefts[idx]+'%'});
  })
  $('.bg').mouseout(function(){
    $(this).stop().slideUp(500);
    $('.sub').stop().slideUp(500);
  })
//------------scroll header-----------
  $(window).scroll(function(){
  const ws = $(window).scrollTop()
  if(ws >= 50){
    $('.header').css({position:'fixed', top:0, zIndex:999, background:'rgba(255,255,255,0.5)', height:'50px'});
    $('.logo').css('display','none');
    $('nav').css({width:'80%', marginLeft:'10%'}).children('.gnb').css({marginTop:0});
    $('.bg').css({top:'53px'});
    $('.contents').css('height','110vh');
    if($(window).width() < 680){
    $('.contents').css('height','100vh');
    }
  } else {
    $('.header').css({position:'static', height:'100px'});
    $('.logo').css('display','block');
    $('nav').css({width:'80%',marginLeft:0}).children('.gnb').css({marginTop:'50px'});
    $('.bg').css({top:'103px'});
    if($(window).width() < 680){
    $('.logo').css('display','none');
    $('nav').css({width:'100%',marginLeft:0});
    
    }
  }
})

//-----------slide img ---------------------------------

$('.dots li').click(function(){
  const idx=$(this).index();
  console.log(idx);
  slide(idx)
  cnt=idx
})
let cnt=0;
function count(){
  cnt++;
  if(cnt<$('.slide li').length){
  slide(cnt);
  }else{
  cnt=0;
  slide(cnt);
  }
}//count fnc end
function slide(cnt){
  $('.slide li').fadeOut('fast').eq(cnt).fadeIn(800)
  $('.dots li').css({transform:'scale(1.0)',opacity:'0.5'}).eq(cnt).css({transform:'scale(1.1)',opacity:1,background:'#fff'})
}
setInterval(count,3000)
//-----------------product---------
if($(window).width()<680){
  $('.color').click(function(){
    $('.product h2').hide()
  })
}
$(window).resize(function(){
if($(window).width()<680){
    $('.color').css({width:'80%'});
}
$('.color').mouseenter(function(){
  if($(window).width()>680){
  $('.color h3').css('margin-top',0)
  $(this).children('h3').css('margin-top','-100px')
  $(this).stop().animate({width:'40%'},800, function(){
    $(this).children('span').css('top','20%')
   })
  $(this).children('.pBox').animate({left:'50%'},800).css('transform','translateX(-50%)')
}
  if($(window).width()<680){
  $('.color:first').mouseover(function(){
  $('.product h2').hide();
  })
  $('.color h3').css('margin-top',0)
  $(this).children('h3').fadeOut()
  $(this).stop().animate({width:'100%'},800, function(){
  $(this).children('span').css('top','20%')
   });
  $(this).children('.pBox').stop().animate({left:'50%'},800).css('transform','translateX(-50%)').children('button').delay(2000).fadeIn(2000);  }
 }).mouseleave(function(){
  if($(window).width()>680){
  $(this).css('width','16.6667%').children('span').css('top','-500px')
  $(this).children('.pBox').stop().animate({left:'-800%'})
  }
  if($(window).width()<680){
  $(this).children('h3').fadeIn();
  $(this).css('width','80%').children('span').css('top','-500px')
  $(this).children('.pBox').stop().animate({left:'-800%'}).children('button').fadeOut(300); 
  }
})//product end
})//resize end
$('.color').mouseenter(function(){
  if($(window).width()>680){
  $('.color h3').css('margin-top',0)
  $(this).children('h3').css('margin-top','-100px')
  $(this).stop().animate({width:'40%'},800, function(){
    $(this).children('span').css('top','20%')
   })
  $(this).children('.pBox').animate({left:'50%'},800).css('transform','translateX(-50%)')
}
  if($(window).width()<680){
  $('.color:first').mouseover(function(){
    $('.product h2').hide();
  })
  $('.color h3').css('margin-top',0)
  $(this).children('h3').fadeOut()
  $(this).stop().animate({width:'100%'},800, function(){
  $(this).children('span').css('top','20%')
   });
  $(this).children('.pBox').stop().animate({left:'50%'},800).css('transform','translateX(-50%)').children('button').delay(2000).fadeIn(2000);  }
 }).mouseleave(function(){
  if($(window).width()>680){
  $(this).css('width','16.6667%').children('span').css('top','-500px')
  $(this).children('.pBox').stop().animate({left:'-800%'})
  }
  if($(window).width()<680){
  $(this).children('h3').fadeIn();
  $(this).css('width','80%').children('span').css('top','-500px')
  $(this).children('.pBox').stop().animate({left:'-800%'}).children('button').fadeOut(300); 
  }
})
//----------------scroll------------
  const contents=$('.contents')
  const dote = $('.dote li');
  dote.click(function(){
    const idx = $(this).index()
    console.log(idx)
    const section=contents.eq(idx);
    const offsetTop = section.offset().top;
    $('html, body').animate({scrollTop:offsetTop}, 600,)
  })
  $(window).scroll(function(){
    const ws=$(this).scrollTop()
    console.log(ws)
   for(let i=0; i<contents.length; i++){
    if(ws >= contents.eq(i).offset().top-100){
      dote.removeClass('active')
      dote.eq(i).addClass('active');
    }
   }
   if(ws>=400){
    $('.drop1').animate({top:0},4000);
    $('.drop2').animate({top:0},5000);
    }
   const oilp = $('.oilBox p')
  for(let j=0; j<oilp.length; j++){
    if(ws >oilp.eq(j).offset().top-250){
      oilp.removeClass('light');
      oilp.eq(j).addClass('light');
    }
  }
  const acryp = $('.acrylicBox p')
  for(let j=0; j<acryp.length; j++){
    if(ws >acryp.eq(j).offset().top-400){
      acryp.removeClass('light');
      acryp.eq(j).addClass('light');
    }
  }

  });
function o_slide(){
  $('.o_imagebox').animate({marginLeft:'-50%'},800,function(){
    $('.o_imagebox li:first').appendTo('.o_imagebox')
    $('.o_imagebox').css({marginLeft:0})
  })
}
setInterval(o_slide,3000)
for(let k=0; k < $('.pickcolor').length; k++){
  $('.pickcolor').eq(k).css({left:49+99*k+'px'})
}
const pickCo=['#b40b0e','#E98F32','#E8D847','#E7E630','#AB8F2E','#B17D2A','#86DD6D','#108479','#019CF8','#0A1469','#020612']
$('.pickcolor').click(function(){
  const idx=$(this).index()
  colorChange(idx)
  $('.canvas > div').css({left:'-100%'}).animate({left:'50%'},1000)
})//pickcolor click end

function colorChange(idx){
  $('.canvas > div').css('background',pickCo[idx]);
}
})//ready end






