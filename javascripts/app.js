var setUpExcellence = function(){
  $("#proffessional-skills").find(".skill").each(function(){
    var skillPercent = $(this).data("skill-completed");
    $(this).find(".skill-completed").animate({
      width: skillPercent+'%'
    }, 810);
    $(this).find(".skill-text").append(" (" + skillPercent+ "%)");
  });
};

var startAllFunctions = function(){
  setUpExcellence();
};

$(window).load(function(){
  $(".loader").fadeOut("slow", function(){
    $(".container").fadeIn("slow", function(){
      startAllFunctions();
    });
  });
});
