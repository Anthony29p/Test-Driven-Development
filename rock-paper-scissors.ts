export enum Move {
    Paper,
    Rock,
    Scissors
}

export enum Result {
    playerWins,
    playerLoses,
    Tie
}

interface RockPaperScissor {
    play(p1: Move, p2: Move) : Result
}

export const createRockPaperScissor = ():RockPaperScissor => {
    return {
        play (p1:Move, p2:Move){
            if(p2 === Move.Scissors){
                return (Result.playerLoses)
            }
            else if (p2 === Move.Paper){
                return (Result.Tie)
            }
            return (Result.playerWins)
        }
    }  
}