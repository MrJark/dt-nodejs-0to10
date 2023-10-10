import { findHeroById } from './services/hero.services'

const hero = findHeroById(1)
console.log(hero?.name ?? 'This id does not exist yet')
