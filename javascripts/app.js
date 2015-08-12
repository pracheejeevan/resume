$(window).load(function(){
  setTimeout(function(){
    $(".loader").fadeOut("slow", function(){
      $(".container").fadeIn("slow");
    });
  }, 500);
});
