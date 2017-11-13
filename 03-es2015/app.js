let favoriteCityId = 'rome'
//console.log(favoriteCityId)
favoriteCityId = "paris"
//console.log(favoriteCityId)

const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
//console.log(citiesId)

citiesId.push('tokyo')
//console.log(citiesId)

let getWeather = (cityId) => {
  let city = cityId.toUpperCase()
  let temperature = 20
  return {city, temperature}
}

const weather = getWeather(favoriteCityId)
//console.log(weather)

const {city} = weather
const {temperature} = weather
/*console.log(city)
console.log(temperature)*/

let [parisId, nycId, ...othersCitesId] = citiesId
/*console.log(parisId);
console.log(nycId);
console.log(othersCitesId.length);*/

  class Trip {

    constructor(id, name, imageUrl) {
      this.id = id
      this.name = name
      this.imageUrl = imageUrl
    }

    get price() {
      return this._price
    }

    set price(price) {
      this._price = price
    }

    static getDefaultTrip() {
      return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }

    toString() {
      return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
    }
  }

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
//console.log(parisTrip)
//console.log(parisTrip.name)
parisTrip.price = 100
//console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
//console.log(defaultTrip)

  class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
      super(id, name, imageUrl)
      this.price = price
    }

    toString() {
      return `Free` + super.toString()
    }
  }

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
//console.log(freeTrip.toString());

  class TripService {
    constructor() {
      this.trips = new Set()

      this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
      this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
      this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let monTrip;
          for (var one of this.trips) {
            if (one.name == tripName) monTrip = resolve(one)
          }
          if (!monTrip) reject(`No trip with name ${tripName}`)
        }, 800)
      })
    }
  }

  class PriceService {
    constructor() {
      this.prices = new Map()

      this.prices.set('paris', 'price = 100')
      this.prices.set('rio-de-janeiro', 'price = 800')
      this.prices.set('nantes', 'no price')
    }

    findPriceByTripid(tripId) {
      return new Promise((resolve, reject) => {
        let monPrix;
        setTimeout(() => {
          for (var [cle, valeur] of this.prices) {
            if (cle == tripId) monPrix = resolve(valeur)
          }
          if (!monPrix) reject(`No price with id ${tripId}`)
        }, 500)
      })
    }
  }


let serviceTrip = new TripService()
let servicePrice = new PriceService()

serviceTrip.findByName('Paris')
  .then((trip) => {
    return servicePrice.findPriceByTripid(trip.id)
  })
  .then((prix) => console.log(prix))
