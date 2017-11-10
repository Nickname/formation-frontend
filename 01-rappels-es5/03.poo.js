var Personne = function(prenom, nom, pseudo) {
  this.prenom = prenom
  this.nom = nom
  this.pseudo = pseudo

  this.getNomComplet = function() {
    return this.nom + " " + this.prenom + " " + this.pseudo
  }
}

var afficherPersonne = function(personne) {
  console.log(personne.nom);
  console.log(personne.prenom);
  console.log(personne.pseudo);
  console.log(personne.getNomComplet());
}

var jules = new Personne("Jules", "LEMAIRE", "jules77")
var paul = new Personne("Paul", "LEMAIRE", "paul44")

afficherPersonne(jules)
afficherPersonne(paul)

jules.pseudo = "jules44"
afficherPersonne(jules)

Personne.prototype.age = "NON RENSEIGNE"
jules.age = 30
console.log(jules.age);

Personne.prototype.getInitiales = function() {
  return this.prenom.charAt(0) + this.nom.charAt(0)
}
console.log(jules.getInitiales());

var robert = {
  prenom: "Robert",
  nom: "LEPREFET",
  pseudo: "robert77",
  getNomComplet: function() {
    return this.nom + " " + this.prenom + " " + this.pseudo
  }
}
afficherPersonne(robert)

var Client = function(prenom, nom, pseudo, numeroClient) {
  Personne.call(this, nom, prenom, pseudo)
  this.numeroClient = numeroClient

  this.getInfos = function() {
    return this.numeroClient + " " + this.nom + " " + this.prenom
  }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve)

console.log(steve.numeroClient);

console.log(steve.getInitiales());
