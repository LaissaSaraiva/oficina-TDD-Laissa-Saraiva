const Queue = require('./queue')

describe('Queue', () => {

  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: [] })
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const stacks = new Queue()
    stacks.add('Node')
    stacks.add('Jest')
    expect(stacks.size()).toEqual(2)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const womenInTech = new Queue()
    womenInTech.add('Grace Hoper')
    expect(womenInTech.add('Ada Lovelace')).toEqual(['Grace Hoper', 'Ada Lovelace'])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const techTeachers = new Queue()
    techTeachers.add('Gustavo Guanabara')
    techTeachers.add('Simara Conceição')
    expect(techTeachers.peek()).toEqual('Gustavo Guanabara')
  })

  it('Deve remover o primeiro item da fila', () => {
    const disneyCharacters = new Queue()
    disneyCharacters.add('Mickey')
    disneyCharacters.add('Minnie')
    disneyCharacters.add('Mulan')
    expect(disneyCharacters.dequeue()).toEqual(["Minnie", "Mulan"])
  })
})