const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  let calculadora;
  beforeEach(() => {
    calculadora = new Calculadora()
  })

  it('Deverá retornar a soma de dois números', () => {
    expect(calculadora.soma(2, 3)).toBe(5);

  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calculadora.subtracao(10, 5)).toBe(5);

  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calculadora.multiplicacao(5, 2)).toEqual(10)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calculadora.divisao(8, 2)).toEqual(4)
  })
})