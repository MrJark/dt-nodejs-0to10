"use strict";
var _a;
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
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'This id does not exist yet');
