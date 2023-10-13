
describe('Test in the app file', () =>{
	test('Should be 13', () => { // se puede poner test o it, funcionan igual
		// expect(true).toBe(true) 

		// Pasos a seguir SIEMPRE
		//1ª Arrange
		const num1 = 10
		const num2 = 3

		//2ª Act
		const result = num1 + num2

		//3ª Assert
		expect(result).toBe(13)
	})
})
