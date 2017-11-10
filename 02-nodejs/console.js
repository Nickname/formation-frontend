var readline = require("readline")
var service = require("./service")
const EventEmitter = require('events')

const event = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var menu = {
  1: {
    libelle: "Liste de tous les présentateurs",
    execute: () => {
      console.log("Liste de tous les présentateurs :")
      //console.log(service.listerTousLesPresentateurs())
    }
  },
  2: {
    libelle: "Top présentateurs",
    execute: () => {
      console.log("Liste des top présentateurs :")
      console.log(service.listerTopPresentateurs())
    }
  },
  3: {
    libelle: "Liste des sessions",
    execute: () => {
      console.log("Liste de toutes les sessions :")
      console.log(service.listerToutesLesSessions())
    }
  },
  4: {
    libelle: "Détail d'une session",
    execute: () => {
      console.log("Détail d'une session");
      rl.question("Choisissez une session :", (idSession) => {
          console.log(service.trouverUneSession(idSession))
      })
    }
  }
}

var execMenu = function() {
  console.log("\n*** Application Conférence ***");
  for (var option in menu) {
    console.log(option + ". " + menu[option].libelle)
  }

  rl.question("\nChoisissez une option :\n", (input) => {
    try {
      menu[input].execute()
    } catch (e) {
      console.log("Cette option n'existe pas !");
      event.emit('continuer')
    }
    event.emit('continuer')
  })
}

execMenu()

event.on('continuer', () => {
  execMenu()
})
