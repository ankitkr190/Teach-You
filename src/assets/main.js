$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

$("#datepicker").datepicker({
  uiLibrary: "bootstrap4",
});
