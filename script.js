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
      document.getElementById("descripcion_eje_" + cuadroId).textContent = descripcion;
      document.getElementById("titulo_lineas_" + cuadroId).textContent = tituloLineas;
      document.getElementById("lineas_trabajo_" + cuadroId).textContent = lineasTrabajo;
      document.getElementById("conocer_mas_" + cuadroId).textContent = conocerMas;
    }

    // Obtén todos los elementos <g>
    var elementosG = document.querySelectorAll("g");

    // Manejador de clic para los elementos <g>
    elementosG.forEach(function (elemento) {
      elemento.addEventListener("click", function () {
        // Obtén la clase del elemento clicado
        var clase = elemento.getAttribute("class");

        // Determina el cuadro de detalles correspondiente según la clase
        var cuadroId;
        if (clase.includes("socioambiental")) {
          cuadroId = "socioambiental";
        } else if (clase.includes("economico")) {
          cuadroId = "economico";
        }

        // Obtén la información específica para el elemento clicado (sustituye estos valores según tu estructura)
        var titulo = "Título de prueba para " + cuadroId;
        var descripcion = "Descripción de prueba para " + cuadroId;
        var tituloLineas = "Líneas de prueba para " + cuadroId;
        var lineasTrabajo = "• Línea 1\n• Línea 2\n• Línea 3";
        var conocerMas = "Texto de prueba con link para " + cuadroId;

        // Actualiza el contenido del cuadro detalles correspondiente
        actualizarCuadroDetalles(cuadroId, titulo, descripcion, tituloLineas, lineasTrabajo, conocerMas);
      });
    });
  });