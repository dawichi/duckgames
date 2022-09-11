export type MatrioshkaDTO = {
    id: number
    value: 1 | 2 | 3
    position: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export type GameDataDTO = {
    player1: MatrioshkaDTO[]
    player2: MatrioshkaDTO[]
    selectToken: (id: number) => void
    selectedToken: number
}
