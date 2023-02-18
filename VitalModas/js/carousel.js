

$(document).ready(function() {
    // Configurações do carrossel
    $('#multi-item-carousel').carousel({
      interval: false
    });
  
    // Muda a classe ativa quando o carrossel é deslizado
    $('#multi-item-carousel').on('slide.bs.carousel', function(e) {
  
      // Determina o número de itens no carrossel
      var $e = $(e.relatedTarget);
      var itemsPerSlide = 4;
      var totalItems = $('.carousel-item').length;
  
      // Verifica se é o último slide
      if ($e.index() >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - $e.index());
        for (var i = 0; i < it; i++) {
          // Adiciona classe clone ao último item para não quebrar a exibição
          if (e.direction == "left") {
            $('.carousel-item').eq(i).addClass('clone');
          } else {
            $('.carousel-item').eq(i).removeClass('clone');
          }
        }
      }
    });
  });
  
  $(document).ready(function() {
    // Configurações do carrossel
    $('#carouselNovidades').carousel({
      interval: false
    });
  
    // Muda a classe ativa quando o carrossel é deslizado
    $('#carouselNovidades').on('slide.bs.carousel', function(e) {
  
      // Determina o número de itens no carrossel
      console.log("Aoba")
      var $e = $(e.relatedTarget);
      var itemsPerSlide = 1;
      var totalItems = $('.carousel-item').length;
  
      // Verifica se é o último slide
      if ($e.index() >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - $e.index());
        for (var i = 0; i < it; i++) {
          // Adiciona classe clone ao último item para não quebrar a exibição
          if (e.direction == "left") {
            $('.carousel-item').eq(i).addClass('clone');
          } else {
            $('.carousel-item').eq(i).removeClass('clone');
          }
        }
      }
    });
  });

  window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 5) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }