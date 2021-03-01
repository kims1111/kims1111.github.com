$(function(){
  if($(window).width()> 1280){
  let bug=0;
  $('.burgerBox').click(function(){
  if(bug==0){
  	$(this).animate({left:'200px'})
  	$('.burger1').removeClass('rotate_re')
  	$('.burger2').removeClass('center_re')
  	$('.burger3').removeClass('rotate_re')
  	$('.burger1').addClass('rotateL')
  	$('.burger2').addClass('center')
  	$('.burger3').addClass('rotateR')
  	$('.header').show(500);
  	bug=1;
  }else {
  	$(this).animate({left:'10px'})
    $('.burger1').removeClass('rotateL')
  	$('.burger2').removeClass('center')
  	$('.burger3').removeClass('rotateR')
  	$('.burger1').addClass('rotate_re')
  	$('.burger2').addClass('center_re')
  	$('.burger3').addClass('rotate_re')
  	bug=0;
  	$('.header').hide(500);
  }
  })

  $(window).scroll(function(){
  	const ws = $(window).scrollTop();
  	console.log(ws);
    console.log(status);
  	if(status==0 && ws>$('#about').offset().top-100){
  		$('.p_bg').animate({left:0});
  		$('.picture').animate({left:'20%',opacity:1},1000);
  		$('.u_bg').animate({left:0,opacity:1},1000);
  		$('.user').animate({right:'10%',opacity:1},1000);
  		$('#about').children('h2').fadeIn();
  	}
  	if(ws>=$('#work').offset().top){
  		$('#work > h2').fadeIn(500);
  	}
    if(status==0 && ws>=$('#skill').offset().top-200){
    	setTimeout(round,100);
    	$('#skill > h2').fadeIn(500);
    	status=1;
    }
  })// scroll end
    $('.viewchart').on('mousedown',function(e){
      function workslide(){
    	if(e.screenY < 600 ){
       $('.slide li:first').stop().animate({left:'200px',top:'80px'},800,function(){
       $(this).css({left:'200px',top:'-115px'});
       $('.slide li:last').prependTo('.slide').css({top:'-100px'}).show();
       $('.slide li:nth-child(3)').css({opacity:1}).siblings('li').css('opacity',0.7)
   	   });
       $('.slide li:nth-child(2)').stop().animate({left:'130px',top:'80px'},800,function(){
       	$(this).css({top:'-100px'});
       })
       $('.slide li:nth-child(3)').stop().animate({left:'200px',top:'80px'},800,function(){
       	$(this).css({top:'-85px'});
       })
       $('.slide li:nth-child(4)').stop().animate({left:'310px',top:'80px'},800,function(){
       	$(this).css({top:'-100px'})
       })
       $('.slide li:nth-child(5)').hide().stop().animate({top:'-310px'});
       const imgsrc=$('.slide li:nth-child(2) > img').attr('src');
       $('.m_view').attr('src',imgsrc);
    	}else if(e.screenY > 600) {
       $('.slide li:nth-child(5)').stop().animate({top:'-275px',left:'200px'},800,function(){
       	$('.slide li:first').appendTo('.slide').show();
       	$(this).css({top:'-85px'});
       	$('.slide li:nth-child(3)').css({opacity:1}).siblings('li').css({opacity:0.7})
       });
       $('.slide li:nth-child(4)').stop().animate({top:'-275px',left:'130px'},800,function(){
       	$(this).css({top:'-100px'});
       });
       $('.slide li:nth-child(3)').stop().animate({top:'-275px',left:'200px'},800,function(){
       	$(this).css({top:'-115px'});
       });
       $('.slide li:nth-child(2)').stop().animate({top:'-275px',left:'310px'},800,function(){
       	$(this).css({top:'-100px'});
       });
       $('.slide li:first').stop().animate({top:'-100px'},800);
        const imgsrc1=$('.slide li:nth-child(4) > img').attr('src');
        $('.m_view').attr('src',imgsrc1);
        }
      }
      workslide();
    })

    $('.view').click(function(e){
      const m_vsrc = $('.m_view').attr('src');
            console.log(m_vsrc);
      if(m_vsrc=='image/work1.jpg'){
      $('.modal').show(500);
      $('.modal > div').hide();
      setTimeout(function(){
        $('.modal > div').show(500);
      },500)
     }
      if(m_vsrc=='image/work2.png'){
       $('.modal1').show(500);
       $('.modal1 > div').hide();
      setTimeout(function(){
        $('.modal1 > div').show(500);
      },500)
      }
      if(m_vsrc=='image/work3.png'){
       $('.modal2').show(500);
       $('.modal2 > div').hide();
      setTimeout(function(){
        $('.modal2 > div').show(500);
      },500)
      }
      if(m_vsrc=='image/work4.png'){
       $('.modal3').show(500);
       $('.modal3 > div').hide();
      setTimeout(function(){
        $('.modal3 > div').show(500);
      },500)
      }
    });
    $('.modal > button').click(function(){
      $('.modal').hide(300);
    })
    $('.modal1 > button').click(function(){
      $('.modal1').hide(300);
    })
    $('.modal2 > button').click(function(){
      $('.modal2').hide(300);
    })
    $('.modal3 > button').click(function(){
      $('.modal3').hide(300);
    })
 
    $('.fileimg').click(function(){
    	const imgsrc=$(this).attr('src');
    	$('.m_view').attr('src',imgsrc);
    })
    function round(){
    skill(99,'.HTML')
    skill(98,'.CSS')
    skill(95,'.JQUERY')
    skill(90,'.JAVASCRIPT')
    skill(95,'.PHOTOSHOP')
    skill(85,'.ILLUST')
    function skill(max,cls){
    	let i=1;
    	const sk1=setInterval(function(){
    	if(i<=max){
    		s_color(i,cls);
    		numup(i,cls);
    		++i;
    	}else {
    		clearInterval(sk1);
    	}
    	function s_color(i,cls){
    		$(cls).css({background:'conic-gradient(#79f 0%, #3ff '+i+'%, #e1e1e1 '+i+'% 100%)'});
    	}
    	function numup(i,cls){
    		$(cls).children('div').children('span').html(i+'%')
    	}
    },20);
    }
  }
  $('.moveBox').mouseover(function(){
    $(this).stop().animate({right:'49%'},800);
    $('.moveblendBox').stop().animate({right:'49%'},800);
    if($(this).position().left <=200){
    $(this).stop().animate({right:'10px'},800);
    $('.moveblendBox').stop().animate({right:'10px'},800);
    }
  });

}
  //media
if($(window).width() < 700 ){
  $(window).scroll(function(){
    const ws = $(window).scrollTop();
    console.log(ws);

    if(status==0 && ws>=$('#skill').offset().top-200){
      setTimeout(round,100);
      status=1;
    }
    function round(){
    skill(99,'.HTML')
    skill(98,'.CSS')
    skill(95,'.JQUERY')
    skill(90,'.JAVASCRIPT')
    skill(95,'.PHOTOSHOP')
    skill(85,'.ILLUST')
    function skill(max,cls){
      let i=1;
      const sk1=setInterval(function(){
      if(i<=max){
        s_color(i,cls);
        numup(i,cls);
        ++i;
      }else {
        clearInterval(sk1);
      }
      function s_color(i,cls){
        $(cls).css({background:'conic-gradient(#79f 0%, #3ff '+i+'%, #e1e1e1 '+i+'% 100%)'});
      }
      function numup(i,cls){
        $(cls).children('div').children('span').html(i+'%')
      }
    },20);
    }
  }
  })// scroll end
   $('.view').click(function(e){
      const m_vsrc = $('.m_view').attr('src');
            console.log(m_vsrc);
      if(m_vsrc=='image/work1.jpg'){
      $('.modal').show(500);
      $('.modal > div').hide();
      setTimeout(function(){
        $('.modal > div').show(500);
      },500)
     }
      if(m_vsrc=='image/work2.png'){
       $('.modal1').show(500);
       $('.modal1 > div').hide();
      setTimeout(function(){
        $('.modal1 > div').show(500);
      },500)
      }
      if(m_vsrc=='image/work3.png'){
       $('.modal2').show(500);
       $('.modal2 > div').hide();
      setTimeout(function(){
        $('.modal2 > div').show(500);
      },500)
      }
      if(m_vsrc=='image/work4.png'){
       $('.modal3').show(500);
       $('.modal3 > div').hide();
      setTimeout(function(){
        $('.modal3 > div').show(500);
      },500)
      }
    });
    $('.modal > button').click(function(){
      $('.modal').hide(300);
    })
    $('.modal1 > button').click(function(){
      $('.modal1').hide(300);
    })
    $('.modal2 > button').click(function(){
      $('.modal2').hide(300);
    })
    $('.modal3 > button').click(function(){
      $('.modal3').hide(300);
    })
 
    $('.fileimg').click(function(){
      const imgsrc=$(this).attr('src');
      $('.m_view').attr('src',imgsrc);
    })//work move end
    $('.moveBox').click(function(){
    $(this).stop().animate({right:'49%'},800);
    $('.moveblendBox').stop().animate({right:'49%'},800);
    if($(this).position().left <=50){
    $(this).stop().animate({right:'10px'},800);
    $('.moveblendBox').stop().animate({right:'10px'},800);
    }
  });
}// media phon size end

});//ready end 