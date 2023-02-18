$(document).ready(function() {
  var pai = document.getElementById("nav-top");
  
  if (screen.width > 700){
    if(aux != "Falso"){
        nav_l = document.getElementById("nav-login");
        nav_l_clone = nav_l.cloneNode(true);
        pai.removeChild(nav_l);
        aux = "Falso";
    }
  }

  if (screen.width < 700){
    if(b != "Falso"){
        nav_m = document.getElementById("nav-mensagem");
        nav_m_clone = nav_m.cloneNode(true);
        pai.removeChild(nav_m);
        b = "Falso";
    } 
  }

})


window.onresize = function(){
    var pai = document.getElementById("nav-top");
    var verfica_mensagem = document.querySelector("#nav-top > #nav-mensagem");
    var verfica_img_login = document.querySelector("#nav-top > #nav-login");
    if (screen.width < 700){
      if(!verfica_img_login){
        pai.appendChild(nav_l_clone);
      }

      if(b != "Falso"){
          nav_m = document.getElementById("nav-mensagem");
          nav_m_clone = nav_m.cloneNode(true);
          pai.removeChild(nav_m);
          b = "Falso";
      } 
      else{
        if(verfica_mensagem){
            pai.removeChild(nav_m_clone);
        }
      }
    
    }
    else if (screen.width >= 700){
        if(!verfica_mensagem){
          pai.appendChild(nav_m_clone);
        }

        if(aux != "Falso"){
            nav_l = document.getElementById("nav-login");
            nav_l_clone = nav_l.cloneNode(true);
            pai.removeChild(nav_l);
            aux = "Falso";
        }
        else{
            if(verfica_img_login){
                pai.removeChild(nav_l_clone);
            }
        }
    }
  }
var b;
var nav_m;
var nav_m_clone;
var aux;
var nav_l;
var nav_l_clone;