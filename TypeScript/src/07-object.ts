// Extensibilité
// console.log(Math.sum); // undefined

// Math.sum = function (a, b) {
//   return a + b;
// };

// console.log(Math.sum); // function
// console.log(Math.sum(1, '2')); // '12'

// Math.sum = function (a, b) {
//   return Number(a) + Number(b);
// };

// console.log(Math.sum(1, '2')); // 3

// delete Math.sum;
// console.log(Math.sum); // undefined

// // Mauvaise pratique d'ajouter, modifier ou supprimer des clés
// // dans des objets extérieurs à l'app
// delete Math.random;
// console.log(Math.random); // undefined

// Pour créer un objet
// On peut le créer directement
// avec object literal
// éviter d'y mettre des méthodes

interface Coords {
  x: number;
  y: number;
  z?: number;
  sum(): number;
}

const coords1: Coords = {
  x: 1,
  y: 2,
  sum() {
    return this.x + this.y;
  }
};

const coords2: Coords = {
  x: 1,
  y: 2,
  sum() {
    return this.x + this.y;
  }
};

console.log(coords1.sum === coords2.sum); // false

// L'autre syntaxe
// constructor (fonction constructeur)
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.name} !`;
// };

class Contact {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name} !`;
  }
}

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.name); // Romain
console.log(romain.hello()); // Romain

// class HttpClient {

// }

// class UserService {
//   protected httpClient!: HttpClient;

// }

// class HttpClient {

// }

// class UserService {
//   protected httpClient: HttpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }
// }

class HttpClient {

}

class UserService {
  constructor(protected httpClient: HttpClient) {  }
}

const http = new HttpClient();

if (http instanceof HttpClient) {

}

// if (coords1 instanceof Coords) {

// }
