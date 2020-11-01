export default class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getPlanets(id) {
    return this.getResource(`/planets/${id}`)
  }
}

const swapi = new SwapiService();

swapi.getPlanets(3).then((planet) => {
  // planet.forEach((planet) => {
  console.log(planet.name, planet.climate, planet.population);
  // })
})