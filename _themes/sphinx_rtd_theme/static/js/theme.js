$( document ).ready(function() {
  // Shift nav in mobile when clicking the menu.
  $("[data-toggle='bb-nav-top']").click(function() {
    $("[data-toggle='bb-nav-shift']").toggleClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
  });
  // Close menu when you click a link.
  $(".bb-menu-vertical .current ul li a").click(function() {
    $("[data-toggle='bb-nav-shift']").removeClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
  });
  $("[data-toggle='rst-current-version']").click(function() {
    console.log("adding behaviour to current version");
    $("[data-toggle='rst-versions']").toggleClass("shift-up");
  });
  $("table.docutils:not(.field-list").wrap("<div class='bb-table-responsive'></div>");
});
