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
let i=0;
function h_slide(){
if(i < $('.headerSlide li').length-1){
	i++;
$('.headerSlide li').fadeOut();
$('.headerSlide li').eq(i).fadeIn();
}else {
	i=0;
	$('.headerSlide li').fadeOut(300);
    $('.headerSlide li').eq(i).fadeIn(1000);
}
}
setInterval(h_slide,3000);
$(window).scroll(function(){
    const ws = $(window).scrollTop();
    	console.log(ws);
    if(ws > 400){
    	$('.fixedNav').show();
    } else {
    	$('.fixedNav').hide();
    }
});

$('.abox > a').mouseover(function(){
	const idx= $(this).index();
	$(this).css({color:'#f00'}).siblings().css({color:'#000'})
	$('.box1 > ul > li').eq(idx).css({opacity:0, left:'50%', display:'block'}).stop().animate({left:0, opacity:1},800);
	$('.box1 > ul > li').eq(idx).siblings('li').css({opacity:1, left:0}).stop().animate({left:'-50%', opacity:0},800,function(){
		$('.box1 > ul > li').eq(idx).siblings('li').css({display:'none'});
	})
	$('.box2_img > li').eq(idx).css({opacity:0, top:'-50%', display:'block'}).stop().animate({top:0, opacity:1},800)
	$('.box2_img > li').eq(idx).siblings('li').css({opacity:1, top:0}).stop().animate({top:'50%', opacity:0},800,function(){
		$('.box2_img > li').eq(idx).siblings('li').css({display:'none'});
	})
	$('.box2_p > li').eq(idx).css({opacity:0, left:'50%', display:'block'}).stop().animate({left:0, opacity:1},800)
	$('.box2_p > li').eq(idx).siblings('li').css({opacity:1, left:0}).stop().animate({left:'-50%', opacity:0},800,function(){
		$('.box2_p > li').eq(idx).siblings('li').css({display:'none'});
	})
	$('.box3 > ul > li').eq(idx).css({opacity:0, right:'50%', display:'block'}).stop().animate({right:0, opacity:1},800);
	$('.box3 > ul > li').eq(idx).siblings('li').css({opacity:1, right:0}).stop().animate({right:'-50%', opacity:0},800,function(){
		$('.box3 > ul > li').eq(idx).siblings('li').css({display:'none'});
	})
});

$('.previewChart li').click(function(){
   const idx=$(this).index();
   $(this).children('span').css({color:'#f00'});
   $(this).siblings('li').children('span').css({color:'#fff'});
   $('.previewImg li').eq(idx).siblings('li').removeClass('rotate1').addClass('rotate').fadeOut('slow');
   $('.previewImg li').eq(idx).removeClass('rotate').addClass('rotate1').fadeIn(1000);
});


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

const boxa = document.querySelectorAll('.box2_p li a');
boxa.forEach((ele,i) => {
	boxa[i].addEventListener('mouseover',()=>{
      boxa[i].style.backgroundColor="#fff";
      boxa[i].style.color="#000";
	});
	boxa[i].addEventListener('mouseout',()=>{
      boxa[i].style.backgroundColor="transparent";
      boxa[i].style.color="#fff";
	});
});

const fixedli = document.querySelectorAll('.gnb1 li');
fixedli.forEach((ele,index) => {
   fixedli[index].addEventListener('mouseover',()=>{
   	 fixedli[index].style.width="100px";
   	 fixedli[index].style.borderRadius="20px";
   	 fixedli[index].style.background="rgba(255,255,255,0.8)";
   	 const child = fixedli[index].childNodes[1];
   	 child.style.color="#000";
   	 child.style.letterSpacing="0";
   	 child.style.fontSize="15px";
   })
   fixedli[index].addEventListener('mouseout',()=>{
   	 fixedli[index].style.width="40px";
   	 fixedli[index].style.borderRadius="50%";
   	 fixedli[index].style.background="rgba(0,100,255,0.7)";
   	 const child = fixedli[index].childNodes[1];
   	 child.style.color="#fff";
   	 child.style.letterSpacing="500px";
   	 child.style.fontSize="30px";
   })
});
