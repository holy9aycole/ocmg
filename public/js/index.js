/* Cambiar el color de fondo del header */
(function () {
  const homePosterNode = document.getElementById("poster");
  const homeHeaderNode = document.querySelector(".home__header");
  const scrollUpNode = document.querySelector(".scroll__up");

  /* Si el elemento homePosterNode no esta definido. Paramos */
  if (!homePosterNode) return;

  /* Alto del poster menos el alto del header */
  const posterHeight = homePosterNode.offsetHeight - 48;

  const options = {
    root: null,
    threshold: 1,
    rootMargin: `${posterHeight}px 0px 0px 0px`,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        homeHeaderNode.classList.remove("active");
        scrollUpNode.classList.remove("active");
      } else {
        homeHeaderNode.classList.add("active");
        scrollUpNode.classList.add("active");
      }
    });
  }, options);
  observer.observe(homePosterNode);
})();

/* Hacer un efecto de slide a los elementos en el main */
(function () {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /* Si el elemento no esta intersectado. No hacemos nada */
      if (!entry.isIntersecting) return;
      /* Cuando sea intersectado: */
      /* Añadimos la clase 'appear' al elemento */
      entry.target.classList.add("appear");

      /* Dejamos de observar el elemento */
      observer.unobserve(entry.target);
    });
  }, options);

  /* Observar todos los elementos con la clase 'slide-in' */
  const sliders = document.querySelectorAll(".slide-in");
  sliders.forEach((slider) => {
    observer.observe(slider);
  });
})();

/* Cambiar de Tema */
(function () {
  const themeNode = document.querySelector(".home__header__theme");
  const documentBody = document.getElementById("document_body");
  const headerNode = documentBody.querySelector(".home__header");
  themeNode.addEventListener("click", () => {
    documentBody.classList.toggle("darken");
    /* Añadimos la clase 'darken' al Header para que se le apliquen los
     * estilos del cambio de tema */
    headerNode.classList.toggle("darken");
  });
})();

/* Llevar el scroll hacia arriba */
(function () {
  const scrollUpNode = document.querySelector(".scroll__up");
  const homePosterNode = document.getElementById("poster");

  scrollUpNode.addEventListener("click", () => {
    homePosterNode.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();

/* Desplear menu */
(function () {
  /* Icono menu */
  const menuIconNode = document.querySelector(".menu__icon");
  /* Menu deplegable */
  const displayMenuNode = document.querySelector(".display__menu");
  /* Body de la pagina */
  const documentBody = document.getElementById("document_body");

  menuIconNode.addEventListener("click", (e) => {
    e.stopPropagation();
    /* Mostrar el menu deplegable */
    displayMenuNode.classList.add("active");
    /* Hacer el document statico, es decir, que no haga scroll mientras el
     * menu desplegable este activo */
    displayMenuNode.classList.add("active");
    document.documentElement.style.overflow = "hidden";
  });

  /* Ocular el menu desplegable al hacer click sobre el cuerpo de al pagina */
  documentBody.addEventListener("click", () => {
    displayMenuNode.classList;
    if (!displayMenuNode.classList.contains("active")) return;
    displayMenuNode.classList.remove("active");
    /* Dejar el document como estaba */
    document.documentElement.style.overflow = "initial";
  });

  /* Ocultar el menu desplegable al hacer click sobre el icono 'x' */
  const displayMenuExitNode = document.querySelector(".display__menu__exit");
  displayMenuExitNode.addEventListener("click", () => {
    displayMenuNode.classList.remove("active");
    /* Dejar el document como estaba */
    document.documentElement.style.overflow = "initial";
  });

  /* Evitar que al hacer click sobre los elementos en el menu desplegable que
   * tengan la clase 'stop-propagation' el evento se propague hasta document
   * y éste oculte el menu desplegable */
  const displayMenuItems = document.querySelectorAll(".stop-propagation");
  displayMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => e.stopPropagation());
  });
})();

/* Slide en el poster de Servicio */
(function () {
  const arrowLeft = document.getElementById("service_poster_left");
  const arrowRight = document.getElementById("service_poster_right");
  const servicePosterItems = document.querySelectorAll(
    ".service__poster__item"
  );

  /* Si los elementos arrowLeft y arrowRight no estan definidos. Paramos */
  if (!(arrowLeft && arrowRight)) return;

  arrowLeft.addEventListener("click", (e) => {
    /* Si el boton esta deshabilitado por la clase 'disabled'. Paramos */
    if (e.target.classList.contains("disabled")) return;

    /* Nuevo desplazamiento del slide */
    let margin = 0;
    servicePosterItems.forEach((item) => {
      /* Desplazamiento actual del slide */
      let marginLeft = item.style.marginLeft;

      /* valor numerico del desplazamiento */
      const match = marginLeft.match(/\d+/);

      /* Si los elementos ya tenian un desplazamiento, lo decrementamos menos
       * 100. En caso contrario le asignamos el valor 0. */
      margin = match ? +match[0] - 100 : 0;

      /* Asignamos el desplazamiento como margin izquierdo a los elementos */
      item.style.marginLeft = `-${margin}%`;
    });

    /* Habilitamos el boton derecho */
    arrowRight.classList.remove("disabled");

    /* Si estamos el primer Item. Deshabilitamos el boton izquierdo */
    if (margin === 0) {
      arrowLeft.classList.add("disabled");
    }
  });

  arrowRight.addEventListener("click", (e) => {
    /* Si el boton esta deshabilitado por la clase 'disabled'. Paramos */
    if (e.target.classList.contains("disabled")) return;

    /* Nuevo desplazamiento del slide */
    let margin = 0;
    servicePosterItems.forEach((item) => {
      /* Desplazamiento actual del slide */
      let marginLeft = item.style.marginLeft;

      /* valor numerico del desplazamiento */
      const match = marginLeft.match(/\d+/);

      /* Si los elementos ya tenian un desplazamiento, lo incrementamos mas 100.
       * En caso contrario le asignamos el valor 100. */
      margin = match ? +match[0] + 100 : 100;

      /* Asignamos el desplazamiento como margin izquierdo a los elementos */
      item.style.marginLeft = `-${margin}%`;
    });

    /* Habilitamos el boton izquierdo */
    arrowLeft.classList.remove("disabled");

    /* Si llegamos en el ultimo Item. Deshabilitamos el boton derecho:
     * 300 = 3 * 100 */
    if (margin === (servicePosterItems.length - 1) * 100) {
      arrowRight.classList.add("disabled");
    }
  });
})();

/* Hacer un efecto de opacidad a los elementos en el main en About_Us */
(function () {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /* Si el elemento no esta intersectado. No hacemos nada */
      if (!entry.isIntersecting) return;
      /* Cuando sea intersectado: */
      /* Añadimos la clase 'appear' al elemento */
      entry.target.classList.add("appear");

      /* Dejamos de observar el elemento */
      observer.unobserve(entry.target);
    });
  }, options);

  /* Observar todos los elementos con la clase 'opacity-in' */
  const sliders = document.querySelectorAll(".opacity-in");
  sliders.forEach((slider) => {
    observer.observe(slider);
  });
})();
