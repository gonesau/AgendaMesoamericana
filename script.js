document.addEventListener("DOMContentLoaded", function () {
  // Función para actualizar el contenido de los cuadros detalles
  function actualizarCuadroDetalles(
    cuadroId,
    titulo,
    descripcion,
    tituloLineas,
    lineasTrabajo,
    conocerMas
  ) {
    document.getElementById("titulo_eje_" + cuadroId).textContent = titulo;
    document.getElementById("descripcion_eje_" + cuadroId).textContent =
      descripcion;
    document.getElementById("titulo_lineas_" + cuadroId).textContent =
      tituloLineas;
    document.getElementById("lineas_trabajo_" + cuadroId).textContent =
      lineasTrabajo;
    document.getElementById("conocer_mas_" + cuadroId).innerHTML = conocerMas; // Usamos innerHTML para incluir el enlace
  }

  // Obtén todos los elementos <g>
  var elementosG = document.querySelectorAll("g");

  // Manejador de clic para los elementos <g>
  elementosG.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
      // Obtén la clase e ID del elemento clicado
      var clase = elemento.getAttribute("class");
      var id = elemento.getAttribute("id");

      // Determina el cuadro de detalles correspondiente según la clase y el ID
      var cuadroId = "economico";
      if (clase.includes("socioambiental")) {
        cuadroId = "economico";
        document.querySelector(".titulo_linea_trabajo").textContent =
          "Eje Socioambiental";
      } else if (clase.includes("economico")) {
        cuadroId = "economico";
        document.querySelector(".titulo_linea_trabajo").textContent =
          "Eje Económico";
      }

      // Actualiza el estilo del cuadro de información
      var cuadroInformacion = document.getElementById("cuadro_informacion");
      cuadroInformacion.style.marginLeft = "8px";
      if (clase.includes("socioambiental")) {
        cuadroInformacion.style.borderLeft = "8px solid orange";
      } else if (clase.includes("economico")) {
        cuadroInformacion.style.borderLeft = "8px solid #03B017";
      }

      // Obtén la información específica para el elemento clicado (sustituye estos valores según tu estructura)
      var info;
      switch (id) {
        case "salud":
          info = {
            titulo: "Salud",
            descripcion:
              "Contribuir al fortalecimiento de capacidades técnicas de los sistemas nacionales de salud mediante la creación de bienes públicos regionales y la transferencia de conocimiento en temas definidos y en complementariedad con instrumentos internacionales como la Agenda de Salud Sostenible para las Américas (ASSA) con el propósito de contribuir al alcance de compromisos internacionales de los países miembros del Sistema Mesoamericano de Salud Pública (SMSP) y fortalecer la articulación entre el SMSP y el Consejo de Ministros de Salud de Ministros de Salud de Centroamérica y República Dominicana (COMISCA).",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Mesa Regulatoria Mesoamericana\n• Comunicación Social en Salud\n• Seguridad Vial en Mesoamérica\n• Fortalecimiento de capacidades nacionales y",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "medio_ambiente":
          info = {
            titulo: "Medio Ambiente",
            descripcion:
              "Contribuir al desarrollo sostenible de la región y a la preservación del capital natural y cultural a través de fortalecimiento de capacidades e implementación de la Estrategia Mesoamericana de Sustentabilidad Ambiental (EMSA).",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Plan Director del Corredor Biológico Mesoamericano (CBM) 2030\n• Programa Mesoamericano de Educación Ambiental\n• Ciudades Sostenibles y Resilientes\n• Fortalecimiento de capacidades nacionales y regionales",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "gestion_riesgo":
          info = {
            titulo: "Gestión del Riesgo",
            descripcion:
              "Desarrollar mecanismos y herramientas para la generación y difusión de información sobre gestión integral de riesgos, a fin de reducir la vulnerabilidad de Mesoamérica ante desastres provocados por fenómenos naturales y proteger a sus habitantes, ecosistemas e infraestructura pública y privada a través de la Red Mesoamericana para la Gestión Integral del Riesgo (RMGIR).",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Red Mesoamericana para la Gestión Integral de Riesgos de Desastres (RMGIR)\n• Fortalecimiento de capacidades nacionales y regionales",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "vivienda":
          info = {
            titulo: "Vivienda",
            descripcion:
              "Impulsar el desarrollo y fortalecimiento de capacidades frente a temas de interés del sector vivienda y desarrollo urbano a través de la cooperación sur-sur entre autoridades y funcionarios de los países miembros del PM, incluyendo la participación de expertos en vivienda y académicos con el apoyo de otras instancias regionales como la Secretaría de la Integración Social Centroamericana (SISCA).",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Fortalecimiento de capacidades nacionales y regionales",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "seguridad_alimentaria":
          info = {
            titulo: "Seguridad Alimentaria y Nutricional",
            descripcion:
              "Fortalecer las acciones regionales en seguridad alimentaria y nutricional con la finalidad de avanzar hacia la erradicación del hambre en Mesoamérica, mediante el desarrollo de marcos normativos y políticas públicas multisectoriales, a través de iniciativas como el programa Mesoamérica sin Hambre AMEXCID-FAO.",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo: "• Programa Mesoamérica sin Hambre AMEXCID-FAO",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "transporte":
          info = {
            titulo: "Transporte",
            descripcion:
              "Contribuir a facilitar la conectividad intra y extra regional de los países mesoamericanos mediante el mejoramiento de la infraestructura, normativa y servicios comodales (carretero, marítimo, ferroviario y aéreo) que incrementen la eficiencia, la confiabilidad y la seguridad de la movilidad de personas y mercancías, reduciendo tiempos y costos.",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Agenda Mesoamericana de Transporte Movilidad y Logística (AMTML)\n• Plan de Acción Regional de Transporte Marítimo de Corta Distancia (PAR TMCD)",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "facilitacion_comercial":
          info = {
            titulo: "Facilitación Comercial y Competitividad",
            descripcion:
              "Fortalecer los flujos de comercio entre los países mesoamericanos y el mundo, por medio de la facilitación del comercio, la competitividad del sector empresarial, el desarrollo de la micro, pequeñas y medianas empresas (mipymes).",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Facilitación Comercial y Competitividad\n• Agenda Mesoamericana de Fomento de las Mipymes",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "energia":
          info = {
            titulo: "Energía",
            descripcion:
              "Fortalecer el desarrollo del mercado y la interconexión eléctrica, el uso racional y eficiente de las energías, y el fomento de fuentes limpias y renovables de energía.",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Biocombustibles\n• Eficiencia energética\n• Interconexión eléctrica\n• Electromovilidad",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        case "telecomunicaciones":
          info = {
            titulo: "Telecomunicaciones",
            descripcion:
              "Fomentar la transformación digital por medio de propuestas innovadoras que potencie el desarrollo productivo y social por medio de políticas, infraestructura, formación, acceso, integración de servicios, entre otros.",
            tituloLineas: "Líneas de trabajo:",
            lineasTrabajo:
              "• Infraestructura digital\n• Fortalecimiento de capacidades\n• Economía digital\n• Seguridad digital\n• Gobierno digital",
            conocerMas: '<a href="LINK" target="_blank">Conoce más aquí</a>',
          };
          break;

        default:
          // Si no se encuentra el ID, mostrar un mensaje genérico
          info = {
            titulo: "Información no disponible",
            descripcion:
              "Lo sentimos, la información para este elemento no está disponible.",
            tituloLineas: "",
            lineasTrabajo: "",
            conocerMas: "",
          };
      }

      // Actualiza el contenido del cuadro detalles correspondiente
      actualizarCuadroDetalles(
        cuadroId,
        info.titulo,
        info.descripcion,
        info.tituloLineas,
        info.lineasTrabajo,
        info.conocerMas
      );
    });
  });
});