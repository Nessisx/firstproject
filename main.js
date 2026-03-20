// Aplicacion de una sola pagina: todo el contenido visible se crea con JS.
const app = document.getElementById("app");

const navItems = ["inicio", "servicios", "portfolio", "blog", "formulario"];
const enabledSections = new Set(navItems);

const services = [
  { name: "Diseno web", price: "$100" },
  { name: "Programacion", price: "$150" },
  { name: "SEO tecnico", price: "$120" },
];

const sections = new Map([
  [
    "inicio",
    {
      title: "Inicio",
      description:
        "Bienvenido. Esta vista se intercambia sin recargar la pagina.",
    },
  ],
  [
    "servicios",
    {
      title: "Servicios",
      description: "Tabla generada en JS con bucles.",
    },
  ],
  [
    "portfolio",
    {
      title: "Portfolio",
      description: "Contenido incrustado para mostrar un trabajo destacado.",
    },
  ],
  [
    "blog",
    {
      title: "Blog",
      description: "Entradas simuladas usando while para no repetir codigo.",
    },
  ],
  [
    "formulario",
    {
      title: "Formulario",
      description: "Formulario simple con validacion basica.",
    },
  ],
]);

const blogPosts = [
  "Como organizo proyectos web pequenos.",
  "Tres trucos para acelerar JavaScript en el navegador.",
  "Errores comunes al crear navegacion dinamica.",
];

function createLayout() {
  const layout = document.createElement("div");
  layout.className = "layout";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Practica de Interactividad con JavaScript";

  const navbar = document.createElement("nav");
  navbar.className = "navbar";
  navbar.id = "navbar";

  // Usamos for para construir el menu a partir de un array.
  for (let i = 0; i < navItems.length; i += 1) {
    const key = navItems[i];

    if (!enabledSections.has(key)) {
      continue;
    }

    const link = document.createElement("a");
    link.href = "#" + key;
    link.className = "nav-link";
    link.dataset.section = key;
    link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    navbar.appendChild(link);
  }

  const panel = document.createElement("main");
  panel.className = "panel";
  panel.id = "content";

  layout.appendChild(title);
  layout.appendChild(navbar);
  layout.appendChild(panel);
  app.appendChild(layout);
}

function renderSection(sectionKey) {
  const content = document.getElementById("content");
  const sectionInfo = sections.get(sectionKey);

  if (!sectionInfo) {
    content.innerHTML = "<h2 class='section-title'>Seccion no encontrada</h2>";
    return;
  }

  let extraMarkup = "";

  // Switch obligatorio: decide como se renderiza cada seccion.
  switch (sectionKey) {
    case "inicio":
      extraMarkup =
        "<p class='hint'>Selecciona una opcion de la barra para cambiar la vista.</p>";
      break;
    case "servicios": {
      let rows = "";
      for (let i = 0; i < services.length; i += 1) {
        rows += `<tr><td>${services[i].name}</td><td>${services[i].price}</td></tr>`;
      }
      extraMarkup = `
				<table>
					<thead>
						<tr><th>Servicio</th><th>Precio</th></tr>
					</thead>
					<tbody>${rows}</tbody>
				</table>
			`;
      break;
    }
    case "portfolio":
      extraMarkup = `
				<iframe
					title="video"
					height="460"
					src="https://www.youtube.com/embed/QMJzjz-vWyg"
					allowfullscreen>
				</iframe>
			`;
      break;
    case "blog": {
      let index = 0;
      let listItems = "";

      // While obligatorio para crear items del blog.
      while (index < blogPosts.length) {
        listItems += `<li>${blogPosts[index]}</li>`;
        index += 1;
      }

      extraMarkup = `<ul>${listItems}</ul>`;
      break;
    }
    case "formulario":
      extraMarkup = `
				<form id="contact-form">
					<label for="nombre">Nombre</label>
					<input id="nombre" name="nombre" required>

					<label for="email">Email</label>
					<input id="email" type="email" name="email" required>

					<label for="mensaje">Mensaje</label>
					<textarea id="mensaje" name="mensaje" rows="4"></textarea>

					<button type="submit">Enviar</button>
				</form>
			`;
      break;
    default:
      extraMarkup = "<p>Contenido no disponible.</p>";
  }

  content.innerHTML = `
		<h2 class="section-title">${sectionInfo.title}</h2>
		<p>${sectionInfo.description}</p>
		${extraMarkup}
	`;

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Formulario enviado correctamente.");
    });
  }
}

function activateNav(sectionKey) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.dataset.section === sectionKey) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function bindNavigation() {
  const navbar = document.getElementById("navbar");

  navbar.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName !== "A") {
      return;
    }

    event.preventDefault();
    const sectionKey = target.dataset.section;
    activateNav(sectionKey);
    renderSection(sectionKey);
  });
}

createLayout();
bindNavigation();
activateNav("inicio");
renderSection("inicio");
