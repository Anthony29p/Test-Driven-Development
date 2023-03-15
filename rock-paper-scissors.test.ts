import { createRockPaperScissor } from "./rock-paper-scissors"

describe('Test de prueba', () =>{
    test('it must work', () => {
        // Arrange (arreglar)
        const expected = 'Player Wins'
        const sut = createRockPaperScissor()

        // Act
        const actual = sut.play()

        // Assert (afirmar)
        expect(expected).toBe(actual)

    })
})