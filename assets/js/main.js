function sectionHeight() {
  var $section = $('section').css('height', 'auto'),
      totalHeight = $(window).height(),
      totlaWidth = $(window).width(),
      availableHeight = $section.outerHeight(true) + $('.wrapper aside').outerHeight(true) + (totlaWidth <= 1060 ? $('.wrapper footer').outerHeight(true) : 0),
      adjustment = totlaWidth <= 480 ? 80 : 20;

  if (availableHeight < totalHeight)
    $section.height(totalHeight - (availableHeight - $section.height()) - adjustment);
  else
    $section.css('height','auto');
}

$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});
