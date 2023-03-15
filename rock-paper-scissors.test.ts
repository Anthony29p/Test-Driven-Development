import { createRockPaperScissor, Move, Result } from "./rock-paper-scissors"

describe('Test de prueba', () =>{
    test('given player move paper and opponent move rock', () => {
        // Arrange (arreglar)
        const expected = Result.playerWins
        const sut = createRockPaperScissor()
        // Act
        const actual = sut.play(Move.Paper,Move.Rock)
        // Assert (afirmar)
        expect(actual).toBe(expected)
    })

    test('given player move paper and opponent move scissors', () => {
        // Arrange
        const expected = Result.playerLoses
        const sut = createRockPaperScissor()
        // Act
        const actual = sut.play(Move.Paper,Move.Scissors)
        // Assert
        expect(actual).toBe(expected)
    })

    test('given player move paper and opponent move paper', () => {
        // Arrange
        const expected = Result.Tie
        const sut = createRockPaperScissor()
        // Act
        const actual = sut.play(Move.Paper,Move.Paper)
        // Assert
        expect(actual).toBe(expected)
    })
})