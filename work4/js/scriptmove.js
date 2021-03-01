$(function(){
	$('.menuBtn').click(function(){
	$('.gnb').show().animate({right:0});
	$(this).hide();
	$('.menuClose').show();
});
$('.menuClose').click(function(){
    $(this).hide();
    $('.gnb').animate({right:'-500px'});
    $('.menuBtn').show();
});
let j=0;
$('.landbtn li').click(function(){
	const idx=$(this).index();
	console.log(idx)
	j=idx;
	$('.landimg li').eq(j).addClass('landimgin').removeClass('landimgout').fadeIn().animate({
		opacity:1
	});
			
    $('.landimg li').eq(j).siblings('li').addClass('landimgout').removeClass('landimgin').animate({
		opacity:0
    });
    $('.landbtn li').eq(j).css({
	    background:'rgba(0,0,0,0.7)',
		color:'#fff'
	});
	$('.landbtn li').eq(j).siblings('li').css({
		background:'rgba(255,255,255,0.9)',
		color:'#bbb'
	});
});
$(window).bind('mousewheel',function(e){
	console.log(j)
	if(e.originalEvent.deltaY==100){
		if(j<7){
			j++
			$('.landimg li').eq(j).addClass('landimgin').removeClass('landimgout').fadeIn().animate({
				opacity:1
			});
			
		    $('.landimg li').eq(j).siblings('li').addClass('landimgout').removeClass('landimgin').animate({
		    	opacity:0
		    });
		    $('.landbtn li').eq(j).css({
		    	background:'rgba(0,0,0,0.7)',
		    	color:'#fff'
		    })
		    $('.landbtn li').eq(j).siblings('li').css({
		    	background:'rgba(255,255,255,0.9)',
		    	color:'#bbb'
		    })
	}else {
		j=0;
		$('.landimg li').eq(j).addClass('landimgin').removeClass('landimgout').fadeIn().animate({
				opacity:1
			});
			
		$('.landimg li').eq(j).siblings('li').addClass('landimgout').removeClass('landimgin').animate({
		    	opacity:0
		    });
	}
}
	if(e.originalEvent.deltaY==-100){
		if(j > 0){
			j--
			$('.landimg li').eq(j).addClass('landimgin').removeClass('landimgout').fadeIn().animate({
				opacity:1
			});
			
		    $('.landimg li').eq(j).siblings('li').addClass('landimgout').removeClass('landimgin').animate({
		    	opacity:0
		    });
		    $('.landbtn li').eq(j).css({
		    	background:'rgba(0,0,0,0.7)',
		    	color:'#fff'
		    })
		    $('.landbtn li').eq(j).siblings('li').css({
		    	background:'rgba(255,255,255,0.9)',
		    	color:'#bbb'
		    })		
	}else {
		j=7;
		$('.landimg li').eq(j).addClass('landimgin').removeClass('landimgout').fadeIn().animate({
				opacity:1
			});
			
		$('.landimg li').eq(j).siblings('li').addClass('landimgout').removeClass('landimgin').animate({
		    	opacity:0
		    });
	}
}
});//bind end
$('.serviceMenu li').click(function(){
	const idx = $(this).index();
    $('.serviceView li').eq(idx).css({marginLeft:'50%',opacity:0,display:'block'}).animate({marginLeft:0,opacity:1
    },800);
    const s_view=$('.serviceView li').eq(idx).children('img').attr('src');
    console.log(s_view);
    $('#servicecontents').eq(0).css({'--background':'url(../'+s_view+')'});
	$('.serviceView li').eq(idx).siblings('li').animate({marginLeft:'-50%',opacity:'0'},800, function(){
		$(this).hide();
	});
})

})//ready end


//------------------scirpt ------------------

const header = document.querySelector('.header');
const gnba = document.querySelectorAll('.gnb > li > a');
gnba.forEach((ele,i) =>{
gnba[i].addEventListener('mouseover',()=>{
	header.style.backgroundColor="rgba(255,255,255,0.9)";
	gnba[i].style.color="#000";
});//mouseover event end
gnba[i].addEventListener('mouseout',()=>{
	header.style.backgroundColor="transparent";
	gnba[i].style.color="#fff";
});
});

