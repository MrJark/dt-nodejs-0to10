
interface Hero {
  id: number,
  name: string,
  owenr: string,
}

// gracias al nodemon y las confifuraciones de node con ts puedo poner el export y no usar el export.modules
export const heroes: Hero[] = [
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
