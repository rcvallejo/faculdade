$(function () {
  $("nav.mobile").click(function () {
    var listaMenu = $("nav.mobile ul");
    if (listaMenu.is(":hidden") == true) {
      var icone = $(".botao-menu-mobile").find("i");
      icone.removeClass("fa-bars").addClass("fa-times");
      listaMenu.slideToggle();
    } else {
      var icone = $(".botao-menu-mobile").find("i");
      icone.removeClass("fa-times").addClass("fa-bars");
      listaMenu.slideToggle();
    }
  });
});
