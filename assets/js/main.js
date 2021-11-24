function setNavPosition() {
  $("nav").css("top", Math.max(15, 200 - window.pageYOffset));
}

function scrollTo(elementId) {
  var targetElement = $(elementId);
  if (targetElement.length > 0) {
    var position = $(elementId).offset().top - 190;
    $("html, body").animate({ scrollTop: position }, 400);
  }
}

$(function () {
  window.onscroll = setNavPosition;

  $("section h1, section h2, section h3").each(function () {
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id", $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
  });

  $("nav ul li").on("click", "a", function (event) {
    var targetElementId = $(this).attr("href");
    window.location.hash = targetElementId + "-";
    scrollTo(targetElementId);
    event.preventDefault();
  });

  setNavPosition();
  if (window.location.hash && window.location.hash.length > 1)
    scrollTo(window.location.hash.substring(0, window.location.hash.length - 1));
});