$(document).ready(function(){
 var jwbslider =  $(".slider").bxSlider({
    pager:true,
    controls:false
  });
  $(".nextbtn").click(function(){
  jwbslider.goToNextSlide();
  });

  $(".prevbtn").click(function(){
  jwbslider.goToPrevSlide();
  });

  var jwbslider1 = $(".slider2").bxSlider({
    pager:false,
    controls:false
  });
  $(".nextbtn1").click(function(){
  jwbslider1.goToNextSlide();
  });

  $(".prevbtn1").click(function(){
  jwbslider1.goToPrevSlide();
  });

  $(document).ready(function(){
    var jwbslider2 = $(".slider3").bxSlider({
      pager:false,
      controls:false

    });
    $(".nextbtn2").click(function(){
    jwbslider2.goToNextSlide();
    });

    $(".prevbtn2").click(function(){
    jwbslider2.goToPrevSlide();
    });

  });
});
