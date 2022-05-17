/* Ocultar los botones flotantes cuando se llegue en el Footer */
(function () {
  const homeFooterNode = document.querySelector(".home__footer");
  const floatButtonNodes = document.querySelectorAll(".float__button");

  const options = {
    root: null,
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        /* Si ya se ha llegado en el Footer con el scroll.
         * Ocultamos los botones */
        floatButtonNodes.forEach((node) => node.classList.remove("active"));
      } else {
        /* Si ya se ha salido del Footer con el scroll.
         * Mostramos los botones */
        floatButtonNodes.forEach((node) => node.classList.add("active"));
      }
    });
  }, options);

  observer.observe(homeFooterNode);
})();

/* Cambiar el color de fondo del header */
(function () {
  const homePosterNode = document.getElementById("poster");
  const homeHeaderNode = document.querySelector(".home__header");
  const floatButtonNodes = document.querySelectorAll(".float__button");

  /* Si el elemento homePosterNode no esta definido. Paramos */
  if (!homePosterNode) return;

  const options = {
    root: null,
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        homeHeaderNode.classList.remove("active");
        floatButtonNodes.forEach((node) => node.classList.remove("active"));
      } else {
        homeHeaderNode.classList.add("active");
        floatButtonNodes.forEach((node) => node.classList.add("active"));
      }
    });
  }, options);
  observer.observe(homePosterNode);
})();

/* Slide del poster */
(function () {
  /* Intervalo de espera 25s */
  const timeout = 25000;

  /* Valor de retorno de setInterval */
  let interval;

  /* Inputs en el poster para cambiar de imagen o item */
  const posterInputNodes = Array.from(
    document.getElementsByName("poster_input")
  );

  /* Si no estamos en la pagina Home. Paramos */
  if (!(posterInputNodes && posterInputNodes.length)) return;

  /* Input que acompaña a cada item en el listado items */
  const posterItemInputNodes = Array.from(
    document.getElementsByName("poster_item_input")
  );

  /* Input que acompaña a cada info en el listado de infos */
  const posterInfoInputNodes = Array.from(
    document.getElementsByName("poster_info_input")
  );

  /* Cambiar de input activo */
  const changeActiveInput = () => {
    /* Tomamos el input activo */
    const activeInput = posterInputNodes.find((node) => node.checked);
    /* Tomamos el indice del input activo que aparece en la propiedad index */
    const activeIndex = +activeInput.getAttribute("index");

    if (activeIndex === posterInputNodes.length - 1) {
      /* Si es el ultimo indice o input. Empezamos desde el principio */
      posterInputNodes[0].checked = true;
      /* Activamos el primer input del listado de items */
      posterItemInputNodes[0].checked = true;
      /* Activamos el primer input del listado de infos */
      posterInfoInputNodes[0].checked = true;
    } else {
      /* En caso contrario. Continuamos con el siguiente input */
      posterInputNodes[activeIndex + 1].checked = true;
      /* Activamos el input del listado de items correspondiente al indice
       * del input activado  */
      posterItemInputNodes[activeIndex + 1].checked = true;
      /* Activamos el input del listado de infos correspondiente al indice
       * del input activado */
      posterInfoInputNodes[activeIndex + 1].checked = true;
    }
  };

  /* Temporizador de 5s para cambiar de input activo */
  interval = setInterval(() => changeActiveInput(), timeout);

  /* Cuando se cambie de input activo haciendo click sobre el cambiamos el
   * input del listado de item activo tambien */
  posterInputNodes.forEach((node, index) => {
    node.addEventListener("change", (e) => {
      if (!e.target.checked) return;
      posterItemInputNodes[index].checked = true;
      posterInfoInputNodes[index].checked = true;

      /* Deshacemos el Temporizador */
      clearInterval(interval);
      /* Inicalizamos de nuevo el Temporizador */
      interval = setInterval(() => changeActiveInput(), timeout);
    });
  });
})();

/* Cambiar de Tema */
(function () {
  const themeInputNode = document.getElementById("theme_input");
  const documentBody = document.getElementById("document_body");
  const headerNode = document.querySelector(".home__header");
  const mainMoreInfoNodes = document.querySelectorAll(".main__more_info__item");
  const footerCopy = document.querySelector(".home__footer__copy");

  themeInputNode.addEventListener("change", (e) => {
    /* Aplicamos el efecto de cambio de tema directamente al Header */
    if (e.target.checked) {
      /* Tema Oscuro */
      documentBody.classList.add("darken");
      headerNode.classList.add("darken");
      /* Elemento de más información en el main: Nuestra Expectativa */
      mainMoreInfoNodes[1].classList.add("darken");
      /* Copyright en el Footer */
      footerCopy.classList.add("darken");
    } else {
      /* Tema Claro */
      documentBody.classList.remove("darken");
      headerNode.classList.remove("darken");
      /* Elemento de más información en el main: Nuestra Expectativa */
      mainMoreInfoNodes[1].classList.remove("darken");
      /* Copyright en el Footer */
      footerCopy.classList.remove("darken");
    }
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
  /* Items del menu desplegable a aplicar el efecto de acordeon */
  const displayMenuAcordeonNodes = document.querySelectorAll(".menu_acordeon");

  /*
   * hideDisplayMenu -- Funcion que oculta el menu desplegable
   * */
  const hideDisplayMenu = () => {
    displayMenuNode.classList.remove("active");
    /* Dejar el document como estaba */
    document.documentElement.style.overflow = "initial";
  };

  /*
   * showDisplayMenu -- Funcion que muestra el menu desplegable
   */
  const showDisplayMenu = () => {
    displayMenuNode.classList.add("active");
    /* Hacer el document statico, es decir, que no haga scroll mientras el
     * menu desplegable este activo */
    document.documentElement.style.overflow = "hidden";
  };

  displayMenuAcordeonNodes.forEach((node) => {
    /* Link del item  */
    const acordeonHeader = node.querySelector(
      ".menu_acordeon .display__menu__link"
    );
    acordeonHeader.addEventListener("click", (e) => {
      e.preventDefault();
      /* Item activo actualmente */
      const activeItem = document.querySelector(".menu_acordeon.active");

      /* Aplicamos el efecto slide vertical al elemento  */
      toogleItem(node);

      /* Cada vez que hacemos click sobre un item para desplegar su contenido,
       * ocultamos el otro item activo.*/
      if (activeItem && activeItem !== node) toogleItem(activeItem);
    });
  });

  /*
   * toggleItem -- Funcion que crea el efecto de slide vertical (acordeon).
   * @param item -- elemento a aplicar el efecto.
   */
  const toogleItem = (item) => {
    /* Lista dentro del item a desplegar con el efecto de slide vertical */
    const displayMenuList = item.querySelector(".display__menu__options");

    if (item.classList.contains("active")) {
      /* Si al elemento ya se le ha aplicado el efecto. Lo deshacemos.  */

      /* Comprimimos de nuevo la lista removiendo los estilos en linea
       * aplicados. */
      displayMenuList.removeAttribute("style");
      /* Desactivamos al elemento. */
      item.classList.remove("active");
    } else {
      /* En caso contrario. Le aplicamos el efecto */

      /* Expadimos la lista. El valor de scrollHeight es el alto real de la
       * lista aun cuando este comprimido (height = 0)  */
      displayMenuList.style.height = displayMenuList.scrollHeight + "px";
      /* Activamos al elemento */
      item.classList.add("active");
    }
  };

  menuIconNode.addEventListener("click", (e) => {
    e.stopPropagation();
    if (displayMenuNode.classList.contains("active")) {
      hideDisplayMenu();
    } else {
      showDisplayMenu();
    }
  });

  /* Ocultar el menu desplegable al hacer click sobre el cuerpo de la pagina */
  documentBody.addEventListener("click", () => {
    displayMenuNode.classList;
    if (!displayMenuNode.classList.contains("active")) return;
    hideDisplayMenu();
  });

  /* Ocultar el menu cada vez que en la URL haya cambiado el hash */
  window.onhashchange = () => hideDisplayMenu();

  /* Ocultar el munu desplegable automaticamente al redimensionar el navegador */
  window.onresize = () => {
    if (window.innerWidth < 768) return;
    hideDisplayMenu();
  };

  /* Evitar que al hacer click sobre los elementos  que tengan la clase
   * 'stop-propagation' el evento se propague hasta document y éste oculte
   * el menu desplegable */
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
      100. En caso contrario le asignamos el valor 0. */
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
      En caso contrario le asignamos el valor 100. */
      margin = match ? +match[0] + 100 : 100;

      /* Asignamos el desplazamiento como margin izquierdo a los elementos */
      item.style.marginLeft = `-${margin}%`;
    });

    /* Habilitamos el boton izquierdo */
    arrowLeft.classList.remove("disabled");

    /* Si llegamos en el ultimo Item. Deshabilitamos el boton derecho:
    300 = 3 * 100 */
    if (margin === (servicePosterItems.length - 1) * 100) {
      arrowRight.classList.add("disabled");
    }
  });
})();

/* Hacer un efecto de slide a los elementos en el main */
// (function () {
// const options = {
// root: null,
// threshold: 0,
// rootMargin: "0px 0px -250px 0px",
// };

// const observer = new IntersectionObserver((entries, observer) => {
// entries.forEach((entry) => {
// [> Si el elemento no esta intersectado. No hacemos nada <]
// if (!entry.isIntersecting) return;
// [> Cuando sea intersectado: <]
// [> Añadimos la clase 'appear' al elemento <]
// entry.target.classList.add("appear");

// [> Dejamos de observar el elemento <]
// observer.unobserve(entry.target);
// });
// }, options);

// [> Observar todos los elementos con la clase 'slide-in' <]
// const sliders = document.querySelectorAll(".slide-in");
// sliders.forEach((slider) => {
// observer.observe(slider);
// });
// })();

/* Hacer un efecto de opacidad a los elementos en el main en About_Us */
// (function () {
// const options = {
// root: null,
// threshold: 0,
// rootMargin: "0px 0px -250px 0px",
// };

// const observer = new IntersectionObserver((entries, observer) => {
// entries.forEach((entry) => {
// [> Si el elemento no esta intersectado. No hacemos nada <]
// if (!entry.isIntersecting) return;
// [> Cuando sea intersectado: <]
// [> Añadimos la clase 'appear' al elemento <]
// entry.target.classList.add("appear");

// [> Dejamos de observar el elemento <]
// observer.unobserve(entry.target);
// });
// }, options);

// [> Observar todos los elementos con la clase 'opacity-in' <]
// const sliders = document.querySelectorAll(".opacity-in");
// sliders.forEach((slider) => {
// observer.observe(slider);
// });
// })();
