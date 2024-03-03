  // Define una función para generar un número aleatorio entre `min` y `max`
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Define una función para crear un nuevo caballo con características aleatorias
  const crearCaballo = () => {
    const nombre = 'Caballo ' + random(1, 10);
    const fuerza = random(60, 90);
    const agilidad = random(60, 90);
    const resistencia = random(60, 90);
    const tamaño = random(1.7, 1.9);
    const experiencia = random(3, 7);
  
    return { nombre, fuerza, agilidad, resistencia, tamaño, experiencia};
  }
  
  // Define una función para simular el efecto del tiempo (clima) a las características de un caballo
  const simularTiempo = (caballo, tiempoEfecto) => {
    caballo.fuerza -= tiempoEfecto.fuerza; 
    caballo.agilidad -= tiempoEfecto.agilidad; 
    caballo.experiencia -= tiempoEfecto.experiencia; 
  
    // Actualiza el caballo con los nuevos valores
    return { ...caballo, fuerza: caballo.fuerza, agilidad: caballo.agilidad, experiencia: caballo.experiencia };
  }
  
  // Define una función que determina al ganador basado en las características del caballo
  const determinarGanador = (caballos) => {
    const tiempoClima = {
      fuerza: random(1, 10),
      agilidad: random(1, 10),
      experiencia: random(1, 5),
    };
  
    caballos.forEach(simularTiempo); // Aplica el valor del tiempoClima a cada caballo
  
    const mejorCaballo = caballos.reduce((mejor, actual) => {
      return (
        mejor.fuerza + mejor.agilidad + mejor.experiencia >
        actual.fuerza + actual.agilidad + actual.experiencia
      )
        ? mejor
        : actual;
    });
  
    return mejorCaballo;
  }
  
  // Define a function to let the user bet on a horse and determine the winner
  const apostarPorCaballo = (caballos) => {
    let listaCaballos = "Elige un caballo (por su número):\n\n";
    for (let i = 0; i < caballos.length; i++) {
      listaCaballos += (i + 1) + ". " + caballos[i].nombre + "\n";
    }
  
    const caballoElegidoBase = parseInt(prompt(listaCaballos));
  
    const caballoElegidoActualizado = simularTiempo(caballos[caballoElegidoBase - 1], {
      fuerza: random(1, 10),
      agilidad: random(1, 10),
      experiencia: random(1, 5),
    });
  
    // Actualiza el array de los caballos con los nuevos valores del caballo
    const updatedCaballos = caballos.map((caballo, index) => {
      if (index === caballoElegidoBase - 1) {
        return caballoElegidoActualizado;
      } else {
        return caballo;
      }
    });
  
    const ganador = determinarGanador(updatedCaballos);
  
    let cantidad;
    while (true) {
      cantidad = prompt("Cuánto quieres apostar:") || '';
      cantidad = parseFloat(cantidad.trim());
      if (!isNaN(cantidad)) {
        break;
      } else {
        alert("Tiene que ser un número, sin comas, ni puntos.");
      }
    }
  
    if (caballoElegidoActualizado.nombre === ganador.nombre) {
      alert("¡Has ganado " + cantidad + " dólares! " + caballoElegidoActualizado.nombre + " ha ganado la carrera.");
    } else {
      alert("Lo siento, has perdido tu apuesta. El caballo ganador fue " + ganador.nombre + ".");
    }
  }
  
  const caballos = [
    {
      nombre: 'Siempre Regia',
      fuerza: 70,
      agilidad: 60,
      resistencia: 80,
      tamaño: 1.8,
      experiencia: 5
    },
    {
      nombre: 'Yogurdemoratenis',
      fuerza: 80,
      agilidad: 70,
      resistencia: 75,
      tamaño: 1.9,
      experiencia: 3
    },
    {
      nombre: 'Poor Facho',
      fuerza: 60,
      agilidad: 80,
      resistencia: 70,
      tamaño: 1.7,
      experiencia: 7
    },
    {
      nombre: 'Esta Es Wena Viejo',
      fuerza: 75,
      agilidad: 75,
      resistencia: 85,
      tamaño: 1.75,
      experiencia: 4
    },
    {
      nombre: 'Rechazado',
      fuerza: 85,
      agilidad: 65,
      resistencia: 65,
      tamaño: 1.85,
      experiencia: 6
    }
  ];
  
  apostarPorCaballo(caballos);