/* Naples Bed Bug Treatment — shared interactions */
(function(){
  "use strict";

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(function(item){
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if(!q || !a) return;
    q.addEventListener("click", function(){
      var isOpen = item.classList.contains("open");
      // close siblings within the same list
      var list = item.closest(".faq-list");
      if(list){
        list.querySelectorAll(".faq-item.open").forEach(function(other){
          if(other !== item){
            other.classList.remove("open");
            other.querySelector(".faq-a").style.maxHeight = null;
            other.querySelector(".faq-q").setAttribute("aria-expanded","false");
          }
        });
      }
      if(isOpen){
        item.classList.remove("open");
        a.style.maxHeight = null;
        q.setAttribute("aria-expanded","false");
      }else{
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded","true");
      }
    });
  });

  /* Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // expandable Services submenu on mobile
    var dropBtn = nav.querySelector(".nav-drop-btn");
    var dropItem = nav.querySelector(".nav-item");
    if(dropBtn && dropItem){
      dropBtn.addEventListener("click", function(e){
        if(window.innerWidth <= 860){
          e.preventDefault();
          dropItem.classList.toggle("expanded");
        }
      });
    }
    // close nav when a plain link is tapped
    nav.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded","false");
      });
    });
  }

  /* Footer year */
  document.querySelectorAll(".js-year").forEach(function(el){
    el.textContent = new Date().getFullYear();
  });
})();
