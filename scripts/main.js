const signosAztecas = [
  { nombre: "Cipactli (Cocodrilo)", fechaInicio: "01-01", fechaFin: "01-20", taco: "Taco de Pescado" },
  { nombre: "Ehécatl (Viento)", fechaInicio: "01-21", fechaFin: "02-10", taco: "Taco de Camarón" },
  { nombre: "Calli (Casa)", fechaInicio: "02-11", fechaFin: "03-02", taco: "Taco de Carnitas" },
  { nombre: "Cuetzpallin (Lagartija)", fechaInicio: "03-03", fechaFin: "03-22", taco: "Taco de Barbacoa" },
  { nombre: "Coatl (Serpiente)", fechaInicio: "03-23", fechaFin: "04-12", taco: "Taco de Lengua" },
  { nombre: "Miquiztli (Muerte)", fechaInicio: "04-13", fechaFin: "05-02", taco: "Taco de Cabeza" },
  { nombre: "Mazatl (Venado)", fechaInicio: "05-03", fechaFin: "05-22", taco: "Taco de Suadero" },
  { nombre: "Tochtli (Conejo)", fechaInicio: "05-23", fechaFin: "06-12", taco: "Taco al Pastor" },
  { nombre: "Atl (Agua)", fechaInicio: "06-13", fechaFin: "07-02", taco: "Taco de Pescado" },
  { nombre: "Itzcuintli (Perro)", fechaInicio: "07-03", fechaFin: "07-22", taco: "Taco de Chorizo" },
  { nombre: "Ozomatli (Mono)", fechaInicio: "07-23", fechaFin: "08-12", taco: "Taco de Alambre" },
  { nombre: "Pápaatl (Águila)", fechaInicio: "08-13", fechaFin: "09-02", taco: "Taco de Cochinita" },
  { nombre: "Cuauhtli (Águila)", fechaInicio: "09-03", fechaFin: "09-22", taco: "Taco de Birria" },
  { nombre: "Cozcacuauhtli (Zopilote)", fechaInicio: "09-23", fechaFin: "10-12", taco: "Taco de Tripa" },
  { nombre: "Ollin (Movimiento)", fechaInicio: "10-13", fechaFin: "11-02", taco: "Taco de Canasta" },
  { nombre: "Técpatl (Pedernal)", fechaInicio: "11-03", fechaFin: "11-22", taco: "Taco de Barbacoa" },
  { nombre: "Quiahuitl (Lluvia)", fechaInicio: "11-23", fechaFin: "12-12", taco: "Taco de Pescado" },
  { nombre: "Xóchitl (Flor)", fechaInicio: "12-13", fechaFin: "01-01", taco: "Taco al Pastor" }
];

document.getElementById('formularioFecha').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
  
  // Formatear la fecha para comparación
  const mes = (fechaNacimiento.getMonth() + 1).toString().padStart(2, '0');
  const dia = fechaNacimiento.getDate().toString().padStart(2, '0');
  const fechaFormateada = `${mes}-${dia}`;

  // Encontrar el signo azteca
  const signoAzteca = signosAztecas.find(signo => {
      // Manejar el caso especial de fin de año (Xóchitl)
      if (signo.nombre === "Xóchitl") {
          return (fechaFormateada >= signo.fechaInicio || fechaFormateada <= signo.fechaFin);
      }
      
      return (fechaFormateada >= signo.fechaInicio && fechaFormateada <= signo.fechaFin);
  });

  // Mostrar resultado
  if (signoAzteca) {
      document.getElementById('resultado').innerHTML = `
          <h3>Tu Signo Azteca es:</h3>
          <h2>${signoAzteca.nombre}</h2>
          <h3>Tu Taco Zodiacal:</h3>
          <h2>${signoAzteca.taco}</h2>
      `;
  } else {
      document.getElementById('resultado').innerHTML = `
          <h3>No se pudo determinar tu signo</h3>
      `;
  }
}); //Todo esto maneja placeholders, cambia los resultadodos de los signos y tacos a los reales.



// function mostrarResultado() {
//     const fecha = document.getElementById('birthdate').value;
//     const resultado = document.getElementById('resultado');
  
//     if (!fecha) {
//       resultado.innerHTML = "<p>Por favor, ingresa tu fecha de nacimiento.</p>";
//       return;
//     }
  
//     // A partis de acá va la lógica para calcular signo y taco, 
//     // pero por ahora lo hice aleatorio, con dos arrays para cada caso.
//     const signos = [
//       "Lucio", "Chilitos", "Chicuelos", "Chicken Jockey", "Gomi", "Esta va para Alexis"
//     ];
  
//     const tacos = [
//       "Quemenotas", "Taco de ojo", "Tacontodo", "Taco de chaquetas"
//     ];
  
//     const signo = signos[Math.floor(Math.random() * signos.length)];
//     const taco = tacos[Math.floor(Math.random() * tacos.length)];
  
//     resultado.innerHTML = `
//       <h2>Tu signo azteca es: ${signo}</h2>
//       <h3>Y tu taco horoscopal o como se diga alch no se es: ${taco} </h3>
//     `;
//   }
  