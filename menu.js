$(document).ready(function () {
  $("#menu").click(function () {
    $(".navigate ul").toggleClass("nav-toggle");
  });
  $(document).click(function (event) {
    if (!$(event.target).closest("#menu, .navigate ul.nav-toggle").length) {
      // Si se hace clic en cualquier parte fuera del botón de hamburguesa y del menú, ocultar el menú
      $(".navigate ul.nav-toggle").removeClass("nav-toggle");
    }
  });
});
