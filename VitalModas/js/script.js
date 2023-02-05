window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 5) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  };

window.onresize = function(){
    if (screen.width <= 800){
    var pai = document.getElementById("nav-top");
    var filho = document.getElementById("nav-mensagem");
    if(filho != null){
        pai.removeChild(filho);
    }
    
    }
}
  