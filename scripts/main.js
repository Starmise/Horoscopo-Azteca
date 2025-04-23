const signosAztecas = [
  { nombre: "Cipactli (Cocodrilo)", fechaInicio: "01-03", fechaFin: "01-23", taco: "Taco de Arrachera", 
    descSigno: "Descripción placeholder del signo Cipactli.", descTaco: "Una descripción del Taco de Arrachera." },

  { nombre: "Ehécatl (Viento)", fechaInicio: "01-24", fechaFin: "02-12", taco: "Taco de Tripa", 
    descSigno: "Descripción placeholder del signo Ehécatl.", descTaco: "Una descripción del Taco de Tripa." },

  { nombre: "Calli (Casa)", fechaInicio: "02-13", fechaFin: "03-04", taco: "Taco de Guisado Casero", 
    descSigno: "Descripción placeholder del signo Calli.", descTaco: "Descripción del taco." },

  { nombre: "Cuetzpallin (Lagartija)", fechaInicio: "03-05", fechaFin: "03-24", taco: "Taco de Campechano", 
    descSigno: "Descripción placeholder del signo Cuetzpallin.", descTaco: "UUna descripción del Taco." },

  { nombre: "Coatl (Serpiente)", fechaInicio: "03-25", fechaFin: "04-13", taco: "Taco de Lengua", 
    descSigno: "Descripción placeholder del signo Coatl.", descTaco: "Una descripción del Taco" },

  { nombre: "Miquiztli (Muerte)", fechaInicio: "04-14", fechaFin: "05-03", taco: "Taco de Birria", 
    descSigno: "Descripción placeholder del signo Miquiztli.", descTaco: "Una descripción del Taco." },

  { nombre: "Mazatl (Venado)", fechaInicio: "05-04", fechaFin: "05-23", taco: "Taco de Cochinita Pibil", 
    descSigno: "Descripción placeholder del signo Mazatl.", descTaco: "Una descripción del Taco" },

  { nombre: "Tochtli (Conejo)", fechaInicio: "05-24", fechaFin: "06-12", taco: "Taco al Pastor", 
    descSigno: "Descripción placeholder del signo Tochtli.", descTaco: "Una descripción del Taco." },

  { nombre: "Atl (Agua)", fechaInicio: "06-13", fechaFin: "07-02", taco: "Taco de Pescado", 
    descSigno: "Descripción placeholder del signo Atl.", descTaco: "Una descripción del Taco" },

  { nombre: "Itzcuintli (Perro)", fechaInicio: "07-03", fechaFin: "07-22", taco: "Taco de Suadero", 
    descSigno: "Descripción placeholder del signo Itzcuintli.", descTaco: "Una descripción del Taco" },

  { nombre: "Ozomatli (Mono)", fechaInicio: "07-23", fechaFin: "08-11", taco: "Taco de Canasta", 
    descSigno: "Descripción placeholder del signo Ozomatli.", descTaco: "Una descripción del Taco" },

  { nombre: "Malinalli (Hierba)", fechaInicio: "08-12", fechaFin: "08-31", taco: "Taco de Nopales", 
    descSigno: "Descripción placeholder del signo Malinalli.", descTaco: "Una descripción del Taco" },

  { nombre: "Acatl (Caña)", fechaInicio: "09-01", fechaFin: "09-20", taco: "Taco Dorado", 
    descSigno: "Descripción placeholder del signo Acatl.", descTaco: "Una descripción del Taco" },

  { nombre: "Ocelotl (Jaguar)", fechaInicio: "09-21", fechaFin: "10-10", taco: "Taco de Cecina", 
    descSigno: "Descripción placeholder del signo Ocelotl.", descTaco: "Una descripción del Taco" },

  { nombre: "Cuauhtli (Águila)", fechaInicio: "10-11", fechaFin: "10-30", taco: "Taco Gobernador", 
    descSigno: "Descripción placeholder del signo Cuauhtli.", descTaco: "Una descripción del Taco" },

  { nombre: "Cozcacuauhtli (Buitre)", fechaInicio: "10-31", fechaFin: "11-19", taco: "Taco de Carnitas", 
    descSigno: "Descripción placeholder del signo Cozcacuauhtli.", descTaco: "Una descripción del Taco." },

  { nombre: "Ollin (Movimiento)", fechaInicio: "11-20", fechaFin: "12-09", taco: "Taco de Mixiote", 
    descSigno: "Descripción placeholder del signo Ollin.", descTaco: "Una descripción del Taco" },
    
  { nombre: "Tecpatl (Pedernal)", fechaInicio: "12-10", fechaFin: "01-02", taco: "Taco al Chorizo", 
    descSigno: "Descripción placeholder del signo Tecpatl.", descTaco: "Una descripción del Taco" }
];
  
  // Función que maneja rangos normales y rangos que cruzan el año
  function fechaEnRango(fecha, inicio, fin) {
    if (inicio > fin) {
      // Rango cruza el año (como 12-13 a 01-01)
      return fecha >= inicio || fecha <= fin;
    } else {
      // Rango dentro del mismo año
      return fecha >= inicio && fecha <= fin;
    }
  }
  
  document.getElementById('formularioFecha').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  
    // Validación de fecha válida
    if (isNaN(fechaNacimiento)) {
      document.getElementById('resultado').innerHTML = `<h3>Introduce una fecha válida.</h3>`;
      return;
    }
  
    // Formatear fecha como MM-DD
    const mes = (fechaNacimiento.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaNacimiento.getDate().toString().padStart(2, '0');
    const fechaFormateada = `${mes}-${dia}`;
  
    // Buscar el signo azteca correspondiente
    const signoAzteca = signosAztecas.find(signo =>
      fechaEnRango(fechaFormateada, signo.fechaInicio, signo.fechaFin)
    );
  
    // Mostrar resultado
    if (signoAzteca) {
      document.getElementById('resultado').innerHTML = `
        <h3>Tu Signo Azteca es:</h3>
        <h2>${signoAzteca.nombre}</h2>
        <p>${signoAzteca.descSigno}</p>
        <h3>Tu Taco Zodiacal:</h3>
        <h2>${signoAzteca.taco}</h2>
        <p>${signoAzteca.descTaco}</p>
      `;
    } else {
      document.getElementById('resultado').innerHTML = `<h3>No se pudo determinar tu signo</h3>`;
    }
  });