$(document).ready(function(){
  $(".slider").bxSlider({
    pager:true
  });
});

$(document).ready(function(){
  var jwbslider1 = $(".slider2").bxSlider({
    pager:false
  });
  $(".nextbtn1").click(function(){
  jwbslider1.goToNextSlide();
  });

  $(".prevbtn1").click(function(){
  jwbslider1.goToPrevSlide();
  });

});
