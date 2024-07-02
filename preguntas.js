let questions = [
    {
      numb: 1,
      question: "¿En qué año se lanzó la PlayStation original?",
      answer: "1994",
      options: [
        "1994", 
        "1995", 
        "1996", 
        "1997"
      ]
    },
    {
      numb: 2,
      question: "¿Cuál es el nombre del personaje principal en la serie de juegos Uncharted?",
      answer: "Nathan Drake",
      options: [
        "Nathan Drake", 
        "Lara Croft", 
        "Master Chief", 
        "Sam Fisher"
      ]
    },
    {
      numb: 3,
      question: "¿Cuál fue el primer juego de PlayStation en vender más de 10 millones de copias?",
      answer: "Gran Turismo",
      options: [
        "Gran Turismo", 
        "Final Fantasy VII", 
        "Metal Gear Solid", 
        "Tekken 3"
      ]
    },
    {
      numb: 4,
      question: "¿Cuál es el nombre del creador de la serie de juegos Metal Gear?",
      answer: "Hideo Kojima",
      options: [
        "Hideo Kojima", 
        "Shigeru Miyamoto", 
        "Nobuo Uematsu", 
        "Yuji Naka"
      ]
    },
    {
      numb: 5,
      question: "¿Cuál fue el primer juego en incluir un 'modo foto' en PlayStation?",
      answer: "Infamous Second Son",
      options: [
        "The Last of Us", 
        "Infamous Second Son", 
        "Uncharted 4", 
        "Horizon Zero Dawn"
      ]
    },
    {
      numb: 6,
      question: "¿Qué juego de PlayStation es conocido por su protagonista con un brazo biónico?",
      answer: "Bionic Commando",
      options: [
        "Bionic Commando", 
        "Deus Ex", 
        "Cyberpunk 2077", 
        "Metal Gear Solid"
      ]
    },
    {
      numb: 7,
      question: "¿Cuál es el nombre del servicio de suscripción de juegos de PlayStation?",
      answer: "PlayStation Plus",
      options: [
        "PlayStation Plus", 
        "PlayStation Now", 
        "PlayStation Network", 
        "PlayStation Store"
      ]
    },
    {
      numb: 8,
      question: "¿Cuál es el nombre del robot protagonista en el juego Astro Bot: Rescue Mission?",
      answer: "Astro",
      options: [
        "Astro", 
        "Bot", 
        "Robo", 
        "Byte"
      ]
    },
    {
      numb: 9,
      question: "¿Qué juego de PlayStation se centra en la caza de monstruos gigantes?",
      answer: "Monster Hunter: World",
      options: [
        "Monster Hunter: World", 
        "Shadow of the Colossus", 
        "Bloodborne", 
        "Dark Souls"
      ]
    },
    {
      numb: 10,
      question: "¿Qué personaje de PlayStation es conocido por decir 'It's time to kick ass and chew bubblegum'?",
      answer: "Duke Nukem",
      options: [
        "Duke Nukem", 
        "Kratos", 
        "Nathan Drake", 
        "Ratchet"
      ]
    },
    {
      numb: 11,
      question: "¿Cuál es el nombre del desarrollador del juego 'The Last Guardian'?",
      answer: "Fumito Ueda",
      options: [
        "Fumito Ueda", 
        "Hideo Kojima", 
        "Shinji Mikami", 
        "Suda51"
      ]
    },
    {
      numb: 12,
      question: "¿Cuál fue el primer juego en la serie Gran Turismo?",
      answer: "Gran Turismo",
      options: [
        "Gran Turismo", 
        "Gran Turismo 2", 
        "Gran Turismo 3", 
        "Gran Turismo 4"
      ]
    },
    {
      numb: 13,
      question: "¿En qué juego aparece el personaje de 'Aloy'?",
      answer: "Horizon Zero Dawn",
      options: [
        "Horizon Zero Dawn", 
        "God of War", 
        "The Last of Us", 
        "Uncharted"
      ]
    },
    {
      numb: 14,
      question: "¿Qué juego de PlayStation es conocido por sus gráficos tipo cel-shading?",
      answer: "Jet Set Radio",
      options: [
        "Jet Set Radio", 
        "Persona 5", 
        "Kingdom Hearts", 
        "Final Fantasy IX"
      ]
    },
    {
      numb: 15,
      question: "¿Cuál es el nombre del juego de terror protagonizado por Ethan Winters?",
      answer: "Resident Evil 7",
      options: [
        "Resident Evil 7", 
        "Silent Hill 2", 
        "Outlast", 
        "Dead Space"
      ]
    },
    {
      numb: 16,
      question: "¿Qué juego de PlayStation incluye una misión en el hospital de St. Mary?",
      answer: "The Last of Us",
      options: [
        "The Last of Us", 
        "Days Gone", 
        "Bloodborne", 
        "Resident Evil 2"
      ]
    },
    {
      numb: 17,
      question: "¿Cuál es el nombre del protagonista de 'God of War'?",
      answer: "Kratos",
      options: [
        "Kratos", 
        "Zeus", 
        "Ares", 
        "Hercules"
      ]
    },
    {
      numb: 18,
      question: "¿Qué juego de PlayStation es famoso por su 'Cubo de Puzzles'?",
      answer: "Echochrome",
      options: [
        "Echochrome", 
        "Lemmings", 
        "Portal", 
        "LittleBigPlanet"
      ]
    },
    {
      numb: 19,
      question: "¿Qué juego de PlayStation es conocido por su mecánica de 'tiempo bala'?",
      answer: "Max Payne",
      options: [
        "Max Payne", 
        "Red Dead Redemption", 
        "Call of Duty", 
        "Medal of Honor"
      ]
    },
    {
      numb: 20,
      question: "¿Cuál es el nombre del juego de PlayStation que involucra aventuras en una isla desierta?",
      answer: "The Forest",
      options: [
        "The Forest", 
        "Subnautica", 
        "ARK: Survival Evolved", 
        "Rust"
      ]
    },
    {
      numb: 21,
      question: "¿Qué juego de PlayStation incluye el mundo ficticio de 'Spira'?",
      answer: "Final Fantasy X",
      options: [
        "Final Fantasy X", 
        "Kingdom Hearts", 
        "Dragon Quest XI", 
        "Ni no Kuni"
      ]
    },
    {
      numb: 22,
      question: "¿Cuál es el nombre del juego de PlayStation que es un simulador de construcción de parques temáticos?",
      answer: "Planet Coaster",
      options: [
        "Planet Coaster", 
        "RollerCoaster Tycoon", 
        "SimCity", 
        "Theme Hospital"
      ]
    },
    {
      numb: 23,
      question: "¿Qué juego de PlayStation se centra en la guerra entre templarios y asesinos?",
      answer: "Assassin's Creed",
      options: [
        "Assassin's Creed", 
        "For Honor", 
        "The Witcher", 
        "Dark Souls"
      ]
    },
    {
      numb: 24,
      question: "¿Cuál es el nombre del juego de PlayStation basado en el deporte del golf?",
      answer: "Everybody's Golf",
      options: [
        "Everybody's Golf", 
        "Tiger Woods PGA Tour", 
        "Mario Golf", 
        "Golf Story"
      ]
    },
    {
      numb: 25,
      question: "¿En qué juego de PlayStation puedes encontrar el personaje 'Ratchet'?",
      answer: "Ratchet & Clank",
      options: [
        "Ratchet & Clank", 
        "Jak and Daxter", 
        "Sly Cooper", 
        "Crash Bandicoot"
      ]
    },
    {
      numb: 26,
      question: "¿Cuál es el nombre del juego de PlayStation que es un simulador de granja?",
      answer: "Stardew Valley",
      options: [
        "Stardew Valley", 
        "Harvest Moon", 
        "Animal Crossing", 
        "Farming Simulator"
      ]
    },
    {
      numb: 27,
      question: "¿Qué juego de PlayStation incluye una ciudad llamada 'Rapture'?",
      answer: "Bioshock",
      options: [
        "Bioshock", 
        "Fallout 3", 
        "Dishonored", 
        "Metro 2033"
      ]
    },
    {
      numb: 28,
      question: "¿En qué juego de PlayStation puedes usar 'Spartan Rage'?",
      answer: "God of War",
      options: [
        "God of War", 
        "Halo", 
        "Destiny", 
        "Overwatch"
      ]
    },
    {
      numb: 29,
      question: "¿Cuál es el nombre del protagonista de 'The Last of Us'?",
      answer: "Joel",
      options: [
        "Joel", 
        "Tommy", 
        "Ellie", 
        "Tess"
      ]
    },
    {
      numb: 30,
      question: "¿Qué juego de PlayStation incluye el arma 'Keyblade'?",
      answer: "Kingdom Hearts",
      options: [
        "Kingdom Hearts", 
        "Final Fantasy VII", 
        "Nier: Automata", 
        "Devil May Cry"
      ]
    }
  ];
  