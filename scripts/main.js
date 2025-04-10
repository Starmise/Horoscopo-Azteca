function mostrarResultado() {
    const fecha = document.getElementById('birthdate').value;
    const resultado = document.getElementById('resultado');
  
    if (!fecha) {
      resultado.innerHTML = "<p>Por favor, ingresa tu fecha de nacimiento.</p>";
      return;
    }
  
    // A partis de acá va la lógica para calcular signo y taco, 
    // pero por ahora lo hice aleatorio, con dos arrays para cada caso.
    const signos = [
      "Lucio", "Chilitos", "Chicuelos", "Chicken Jockey", "Gomi", "Esta va para Alexis"
    ];
  
    const tacos = [
      "Quemenotas", "Taco de ojo", "Tacontodo", "Taco de chaquetas"
    ];
  
    const signo = signos[Math.floor(Math.random() * signos.length)];
    const taco = tacos[Math.floor(Math.random() * tacos.length)];
  
    resultado.innerHTML = `
      <h2>Tu signo azteca es: ${signo}</h2>
      <h3>Y tu taco horoscopal o como se diga alch no se es: ${taco} </h3>
    `;
  }
  