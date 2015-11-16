var setUpExcellence = function(){
  $("#proffessional-skills").find(".skill").each(function(){
    var skillPercent = $(this).data("skill-completed");
    var skillset = $(this).data("skillset");
    $(this).find(".skill-text").find(".percentage-to-show").html(" ("+skillPercent+ "%)");

    $(this).find(".skill-completed").animate({
      width: skillPercent+'%'
    }, 810);
    // $(this).find(".skill-text").append(" (" + skillPercent+ "%)");
  });
};

$(document).on("settingsIconClicked", function(e, data){
  var sectionToScroll = data.href;
  var yOffsetOfSection = $("#"+sectionToScroll).offset().top;
  $("body").animate({
    scrollTop: yOffsetOfSection
  });
});

$("#settings a").on("click", function(){
  var data = {
    "href": $(this).data("href")
  };
  $(document).trigger("settingsIconClicked", data);
});

$("#go-to-top").on("click", function(){
  var data = {
    "href": $(this).data("href")
  };
  $(document).trigger("settingsIconClicked", data);
});

var startAllFunctions = function(){
  setUpExcellence();
  $("#go-to-top").hide();


  $("#topLoader").percentageLoader({
    width: 256,
    height: 256,
    value: "93%",
    progress : 0.93
  });

};

$(window).on("scroll", function(){
  if($("body").scrollTop() > 150){
    $("#go-to-top").show();
  }else{
    $("#go-to-top").hide();
  }
});

$(window).load(function(){
  $(".loader").fadeOut("slow", function(){
    $(".container").fadeIn("slow", function(){
      startAllFunctions();
    });
  });
});
