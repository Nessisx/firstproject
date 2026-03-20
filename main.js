// Map: secciones de la SPA adaptadas a tu practica.
const secciones = new Map([
  ["inicio", "Inicio"],
  ["servicios", "Servicios"],
  ["portfolio", "Portfolio"],
  ["blog", "Blog"],
  ["formulario", "Formulario"],
]);

// Array: contenido para la seccion inicial.
const habilidades = ["Python", "JavaScript", "HTML", "SQL", "Git"];

// Set: tecnologias unicas sin duplicados.
const tecnologiasUnicas = new Set([
  "Python",
  "JavaScript",
  "SQL",
  "Git",
  "Python",
]);

// Array de objetos para tabla de servicios.
const servicios = [
  { nombre: "Diseno web", precio: "$100" },
  { nombre: "Programacion", precio: "$150" },
  { nombre: "Mantenimiento", precio: "$90" },
];

// Array de objetos para el blog/proyectos.
const posts = [
  {
    titulo: "Entrada 1",
    texto: "Organizacion de una pagina web y estructura en modulos.",
    anio: 2026,
  },
  {
    titulo: "Entrada 2",
    texto: "Eventos, validaciones y navegacion dinamica en JavaScript.",
    anio: 2026,
  },
  {
    titulo: "Entrada 3",
    texto: "Uso de Map, Set, Array, switch, if, for y while.",
    anio: 2026,
  },
];

// Objeto para generar la tabla de datos.
const datosPortafolio = {
  proyecto: "Portafolio personal",
  tipo: "SPA en JavaScript puro",
  estado: "Activo",
};

// Descriptores para construir el formulario por bucle.
const camposFormulario = [
  { id: "nombre", label: "Nombre:", tag: "input", tipo: "text" },
  { id: "email", label: "Correo:", tag: "input", tipo: "text" },
  { id: "mensaje", label: "Mensaje:", tag: "textarea", tipo: null },
];

function crearElemento(tag, attrs, inner) {
  const el = document.createElement(tag);

  // for: asigna atributos dinamicamente.
  if (attrs) {
    for (const [clave, valor] of Object.entries(attrs)) {
      el.setAttribute(clave, valor);
    }
  }

  if (inner !== undefined) {
    el.innerHTML = inner;
  }

  return el;
}

function construirEstructuraBase() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  app.appendChild(crearElemento("h1", {}, "Practica JS - Navegacion dinamica"));
  app.appendChild(crearElemento("nav", { id: "nav-root" }));
  app.appendChild(crearElemento("hr", {}));
  app.appendChild(crearElemento("div", { id: "secciones-root" }));
  app.appendChild(crearElemento("hr", {}));
  app.appendChild(crearElemento("footer", { id: "footer-root" }));
}

function generarInicio() {
  const sec = crearElemento("section", { id: "sec-inicio" });
  sec.appendChild(
    crearElemento(
      "p",
      {},
      "Bienvenido. Esta pagina cambia secciones desde la barra sin recargar.",
    ),
  );

  sec.appendChild(crearElemento("h3", {}, "Habilidades"));
  const ul = crearElemento("ul", {});
  for (const skill of habilidades) {
    ul.appendChild(crearElemento("li", {}, skill));
  }
  sec.appendChild(ul);

  sec.appendChild(
    crearElemento(
      "p",
      {},
      "Tecnologias unicas (Set): " + [...tecnologiasUnicas].join(", "),
    ),
  );

  return sec;
}

function generarServicios() {
  const sec = crearElemento("section", { id: "sec-servicios" });
  sec.appendChild(crearElemento("h2", {}, "Servicios"));

  const tabla = crearElemento("table", {
    border: "1",
    cellpadding: "8",
    cellspacing: "0",
  });
  const thead = crearElemento(
    "thead",
    {},
    "<tr><th>Servicio</th><th>Precio</th></tr>",
  );
  const tbody = crearElemento("tbody", {});

  // for clasico para construir filas.
  for (let i = 0; i < servicios.length; i += 1) {
    const fila = `<tr><td>${servicios[i].nombre}</td><td>${servicios[i].precio}</td></tr>`;
    tbody.appendChild(
      crearElemento("tr", {}, fila.replace("<tr>", "").replace("</tr>", "")),
    );
  }

  // Ajuste simple para no anidar tr incorrectamente.
  tbody.innerHTML = "";
  for (let i = 0; i < servicios.length; i += 1) {
    tbody.innerHTML += `<tr><td>${servicios[i].nombre}</td><td>${servicios[i].precio}</td></tr>`;
  }

  tabla.appendChild(thead);
  tabla.appendChild(tbody);
  sec.appendChild(tabla);
  return sec;
}

function generarPortfolio() {
  const sec = crearElemento("section", { id: "sec-portfolio" });
  sec.appendChild(crearElemento("h2", {}, "Portfolio"));
  sec.appendChild(
    crearElemento(
      "p",
      {},
      "Embed de video e imagen, como te piden en la practica.",
    ),
  );

  sec.appendChild(
    crearElemento(
      "iframe",
      {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/QMJzjz-vWyg",
        title: "video",
        allowfullscreen: "",
      },
      "",
    ),
  );

  sec.appendChild(crearElemento("p", {}, ""));

  sec.appendChild(
    crearElemento("img", {
      src: "https://inasianspaces.com/wp-content/uploads/2020/08/ch-131-freedom.jpg",
      alt: "imagen",
      width: "560",
    }),
  );

  const tablaInfo = crearElemento("table", {
    border: "1",
    cellpadding: "8",
    cellspacing: "0",
  });
  tablaInfo.appendChild(
    crearElemento("thead", {}, "<tr><th>Campo</th><th>Valor</th></tr>"),
  );

  const bodyInfo = crearElemento("tbody", {});
  // for...in sobre objeto.
  for (const campo in datosPortafolio) {
    bodyInfo.innerHTML += `<tr><td>${campo}</td><td>${datosPortafolio[campo]}</td></tr>`;
  }
  tablaInfo.appendChild(bodyInfo);
  sec.appendChild(crearElemento("p", {}, ""));
  sec.appendChild(tablaInfo);

  return sec;
}

function generarBlog() {
  const sec = crearElemento("section", { id: "sec-blog" });
  sec.appendChild(crearElemento("h2", {}, "Blog"));

  let i = 0;
  // while para listar posts.
  while (i < posts.length) {
    let prefijo;
    // switch para variar prefijos.
    switch (i % 3) {
    tbody.innerHTML += `<tr><td>${servicios[i].nombre}</td><td>${servicios[i].precio}</td></tr>`;
        break;

    sec.appendChild(
      crearElemento(
        "h3",
        {},
        `${prefijo} ${posts[i].titulo} (${posts[i].anio})`,
      ),
    );
    sec.appendChild(crearElemento("p", {}, posts[i].texto));
    sec.appendChild(crearElemento("hr", {}));
    i += 1;
  }

  return sec;
}

function generarFormulario() {
  const sec = crearElemento("section", { id: "sec-formulario" });
  sec.appendChild(crearElemento("h2", {}, "Formulario"));

  const form = crearElemento("form", { id: "form-contacto" });

  for (const campo of camposFormulario) {
    form.appendChild(crearElemento("label", { for: campo.id }, campo.label));
    form.appendChild(crearElemento("br", {}));

    // if para decidir entre input y textarea.
    if (campo.tag === "textarea") {
      form.appendChild(
        crearElemento("textarea", {
          id: campo.id,
          name: campo.id,
          rows: "4",
          cols: "40",
          required: "",
        }),
      );
    } else {
      form.appendChild(
        crearElemento("input", {
          id: campo.id,
          name: campo.id,
          type: campo.tipo,
          required: "",
        }),
      );
    }

    form.appendChild(crearElemento("br", {}));
    form.appendChild(crearElemento("br", {}));
  }

  form.appendChild(crearElemento("button", { type: "submit" }, "Enviar"));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const previo = document.getElementById("form-msg");
    if (previo) {
      previo.remove();
    }

    const msg = crearElemento("p", { id: "form-msg" });

    if (!nombre) {
      msg.style.color = "red";
      msg.innerHTML = "El nombre no puede estar vacio.";
      form.appendChild(msg);
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email || !emailValido) {
      msg.style.color = "red";
      msg.innerHTML = "Ingresa un correo valido.";
      form.appendChild(msg);
      return;
    }

    if (!mensaje) {
      msg.style.color = "red";
      msg.innerHTML = "El mensaje no puede estar vacio.";
      form.appendChild(msg);
      return;
    }

    msg.style.color = "green";
    msg.innerHTML = "Mensaje enviado correctamente, " + nombre + ".";
    form.appendChild(msg);
    form.reset();
  });

  sec.appendChild(form);
  return sec;
}

function navegarA(id) {
  const todas = document.querySelectorAll("#secciones-root section");
  for (const sec of todas) {
    sec.style.display = "none";
  }

  const target = document.getElementById("sec-" + id);
  if (target) {
    target.style.display = "block";
  }

  const enlaces = document.querySelectorAll("#nav-root a");
  let i = 0;
  // while para actualizar enlace activo.
  while (i < enlaces.length) {
    if (enlaces[i].dataset.id === id) {
      enlaces[i].style.fontWeight = "bold";
    } else {
      enlaces[i].style.fontWeight = "normal";
    }
    i += 1;
  }
}

function init() {
  construirEstructuraBase();

  const nav = document.getElementById("nav-root");
  for (const [id, etiqueta] of secciones) {
    const a = crearElemento("a", { href: "#", "data-id": id }, etiqueta);
    a.addEventListener("click", function (e) {
      e.preventDefault();
      navegarA(id);
    });
    nav.appendChild(a);
    nav.appendChild(document.createTextNode(" | "));
  }

  const root = document.getElementById("secciones-root");
  for (const [id] of secciones) {
    let seccion;
    switch (id) {
      case "inicio":
        seccion = generarInicio();
        break;
      case "servicios":
        seccion = generarServicios();
        break;
      case "portfolio":
        seccion = generarPortfolio();
        break;
      case "blog":
        seccion = generarBlog();
        break;
      case "formulario":
        seccion = generarFormulario();
        break;
      default:
        seccion = crearElemento(
          "section",
          { id: "sec-" + id },
          "Seccion " + id,
        );
    }

    seccion.style.display = "none";
    root.appendChild(seccion);
  }

  const year = new Date().getFullYear();
  document
    .getElementById("footer-root")
    .appendChild(crearElemento("p", {}, "&copy; " + year + " Mi practica"));

  navegarA("inicio");
}

document.addEventListener("DOMContentLoaded", init);
