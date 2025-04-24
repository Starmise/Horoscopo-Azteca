const signosAztecas = [
  { nombre: "Cipactli (Cocodrilo)", fechaInicio: "01-03", fechaFin: "01-23", taco: "Taco de Arrachera", 
    descSigno: "Significado: Comienzos, origen, abundancia. Personalidad: Personas protectoras, fuertes, con gran iniciativa; suelen ser líderes naturales.", 
    descTaco: "Representa los comienzos, la fuerza y la abundancia. Como buen líder natural, este taco llega con todo el poder norteño y se impone en el asador desde el primer bocado." },

  { nombre: "Ehécatl (Viento)", fechaInicio: "01-24", fechaFin: "02-12", taco: "Taco de Tripa", 
    descSigno: "Significado: Movimiento, vitalidad, comunicación. Personalidad: Ingeniosos, comunicativos y sociables, tienen facilidad para adaptarse a diferentes ambientes.", 
    descTaco: "Adaptable, sociable y ligero, igual que el cotorreo en un puesto de tacos después de la fiesta del pueblo." },

  { nombre: "Calli (Casa)", fechaInicio: "02-13", fechaFin: "03-04", taco: "Taco de Guisado Casero", 
    descSigno: "Significado: Seguridad, estabilidad, hogar. Personalidad: Son personas que buscan estabilidad, son familiares, responsables y protectoras.", 
    descTaco: "Confortable, hogareño y estable, como los guisados de mamá un dominguito." },

  { nombre: "Cuetzpallin (Lagartija)", fechaInicio: "03-05", fechaFin: "03-24", taco: "Taco de Campechano", 
    descSigno: "Significado: Agilidad, adaptación, renovación. Personalidad: Flexibles, inteligentes y en constante renovación; pueden superar cualquier adversidad.",
    descTaco: "Siempre renovándose y ágil, combina carnes sin miedo al exito como buen mexicano, echándole limón y salsa verde." },

  { nombre: "Coatl (Serpiente)", fechaInicio: "03-25", fechaFin: "04-13", taco: "Taco de Lengua", 
    descSigno: "Significado: Sabiduría, intuición, transformación. Personalidad: Intuitivos, espirituales y misteriosos; personas con una gran capacidad de autotransformación.", 
    descTaco: "Misterioso y sorprendente, inicialmente intimida, pero conquista paladares valientes que se atreven a probar de todo." },

  { nombre: "Miquiztli (Muerte)", fechaInicio: "04-14", fechaFin: "05-03", taco: "Taco de Birria", 
    descSigno: " Significado: Renovación, cambio radical, fin de ciclos. Personalidad: Personas profundas, introspectivas, con capacidad de superar situaciones difíciles y renacer más fuertes.", 
    descTaco: "La renovación hecha taco, ideal para curar la cruda más espantosa de los domingos en la mañana." },

  { nombre: "Mazatl (Venado)", fechaInicio: "05-04", fechaFin: "05-23", taco: "Taco de Cochinita Pibil", 
    descSigno: "Significado: Belleza, sensibilidad, elegancia. Personalidad: Refinados, creativos y sensibles, valoran la estética y poseen mucha empatía.", 
    descTaco: "Refinado, estético y sensible, este taco es una joya del sureste que combina belleza con un sabor que hace llorar de emoción." },

  { nombre: "Tochtli (Conejo)", fechaInicio: "05-24", fechaFin: "06-12", taco: "Taco al Pastor", 
    descSigno: "Significado: Fertilidad, abundancia, alegría. Personalidad: Alegres, optimistas y sociables; disfrutan de la vida y atraen prosperidad.", 
    descTaco: "Alegre y sociable, infalible para prender cualquier reunión, acompañado con su piña voladora." },

  { nombre: "Atl (Agua)", fechaInicio: "06-13", fechaFin: "07-02", taco: "Taco de Pescado", 
    descSigno: "Significado: Pureza, fluidez, emociones.  Personalidad: Personas emocionales, sensibles, con gran capacidad de adaptación y empatía hacia los demás.", 
    descTaco: "Fluido, fresco y emocionalmente reconfortante, como un abrazo después de un mal día en la playa." },

  { nombre: "Itzcuintli (Perro)", fechaInicio: "07-03", fechaFin: "07-22", taco: "Taco de Suadero", 
    descSigno: "Significado: Lealtad, protección, amistad. Personalidad: Son leales, honestos y protectores; excelentes amigos y compañeros confiables.", 
    descTaco: "Leal, callejero y sabroso, el famoso suaperro es el favorito de los que saben que rollo en la taquería." },

  { nombre: "Ozomatli (Mono)", fechaInicio: "07-23", fechaFin: "08-11", taco: "Taco de Canasta", 
    descSigno: "Significado: Diversión, ingenio, creatividad. Personalidad: Divertidos, ingeniosos y espontáneos; poseen talento artístico y capacidad creativa.", 
    descTaco: "Divertido y creativo, como el vendedor que pasa en bicicleta gritando ¡Tacos, tacos de canasta!." },

  { nombre: "Malinalli (Hierba)", fechaInicio: "08-12", fechaFin: "08-31", taco: "Taco de Nopales", 
    descSigno: "Significado: Curación, crecimiento, dualidad. Personalidad: Sanadores naturales, equilibrados, prudentes; saben reconciliar situaciones conflictivas.", 
    descTaco: "Equilibrado y prudente, listo para sanar cualquier malestar, ideal después de excesos culinarios." },

  { nombre: "Acatl (Caña)", fechaInicio: "09-01", fechaFin: "09-20", taco: "Taco Dorado", 
    descSigno: " Significado: Fuerza, flexibilidad, liderazgo. Personalidad: Líderes justos, sólidos moralmente, adaptables y capaces de mantener su equilibrio en situaciones difíciles.", 
    descTaco: "Firme y justo, como esos tacos doraditos bañados generosamente en salsita roja o verde." },

  { nombre: "Ocelotl (Jaguar)", fechaInicio: "09-21", fechaFin: "10-10", taco: "Taco de Cecina", 
    descSigno: "Significado: Valor, fuerza, autoridad. Personalidad: Fuertes, valientes y decididos; poseen gran magnetismo personal y habilidades para liderar.", 
    descTaco: "Decidido y magnético, conquista con fuerza y sabor tradicional mexicano." },

  { nombre: "Cuauhtli (Águila)", fechaInicio: "10-11", fechaFin: "10-30", taco: "Taco Gobernador", 
    descSigno: "Significado: Visión, libertad, ambición. Personalidad: Independientes, con gran visión a largo plazo, personas con ambición y mentalidad estratégica.", 
    descTaco: "Ambicioso y estratégico, presente en los menús más selectos de México, conquistando alturas culinarias." },

  { nombre: "Cozcacuauhtli (Buitre)", fechaInicio: "10-31", fechaFin: "11-19", taco: "Taco de Carnitas", 
    descSigno: "Significado: Transformación, limpieza, renovación espiritual. Personalidad: Sabios, introspectivos, con gran capacidad para dejar atrás lo que no sirve y ayudar a otros a renacer.", 
    descTaco: "Sabio y transformador, como la comida del sábado con carnitas y una buena salsa verde con aguacate." },

  { nombre: "Ollin (Movimiento)", fechaInicio: "11-20", fechaFin: "12-09", taco: "Taco de Mixiote", 
    descSigno: "Significado: Cambio constante, evolución, fuerza dinámica.  Personalidad: Personas activas, dinámicas y en constante evolución; capaces de adaptarse a cambios drásticos con facilidad.", 
    descTaco: "Dinámico y activo, cambia y evoluciona, ideal para degustar en cualquier rincón mexicano." },
    
  { nombre: "Tecpatl (Pedernal)", fechaInicio: "12-10", fechaFin: "01-02", taco: "Taco al Chorizo", 
    descSigno: "Significado: Desafío, sacrificio, agudeza. Personalidad: Fuertes, valientes y resilientes; poseen un carácter afilado y determinación ante los desafíos.", 
    descTaco: "Valiente y desafiante, dispuesto a enfrentar cualquier reto con una buena salsa de habanero." }
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
        <button onclick="window.location.href='horoscopos.html'" 
            style="background-color: #283618; color: #fefae0; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">
            Ver Horóscopos
        </button>
      `;
    } else {
      document.getElementById('resultado').innerHTML = `<h3>No se pudo determinar tu signo</h3>`;
    }
  });