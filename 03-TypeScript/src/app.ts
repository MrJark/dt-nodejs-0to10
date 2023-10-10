const heroes = [
  {
    id: 1,
    name: 'Ironman',
    owenr: 'Marvel'
  },
  {
    id: 2,
    name: 'Superman',
    owenr: 'DC'
  },
  {
    id: 3,
    name: 'Spidernan',
    owenr: 'Marvel'
  },
  {
    id: 4,
    name: 'Batman',
    owenr: 'DC'
  }
]

const findHeroById = (id: number) => {
  return heroes.find(hero => hero.id === id)
}

const hero = findHeroById(2)
console.log(hero)
