//Método que se lanza en document ready
const docReady = fn => {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

//Interacciones de la cabecera, para menú mobile
const headerInteraction = () => {
  if (document.getElementById("menu-toggle")) {
    document.getElementById("menu-toggle").addEventListener("click", () => {
      document.getElementById("wrapper").classList.toggle("open");
    });
  }
};

//Scroll Up para cabecera fixed
const fixedHeaderInteraction = () => {
  let lastScrollTop = 0;
  const headerHeight = document.getElementById("header").offsetHeight;
  window.addEventListener("scroll", function() {
    let st = window.scrollY;
    const wrapper = document.getElementById("wrapper");
    //Scroll classes up and down
    if (st > headerHeight) {
      wrapper.classList.add("fixed");
      if (st > lastScrollTop) {
        wrapper.classList.remove("up");
        wrapper.classList.add("down");
      } else {
        wrapper.classList.add("up");
        wrapper.classList.remove("down");
      }
      lastScrollTop = st;
    } else {
      wrapper.classList.remove("fixed");
      wrapper.classList.remove("up");
      wrapper.classList.remove("down");
    }
  });
};

//Iniciamos métodos en document ready.
docReady(headerInteraction(), fixedHeaderInteraction());
