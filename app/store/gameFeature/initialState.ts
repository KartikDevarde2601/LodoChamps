interface PileState {
    id: string;
    pos: number;
    travelcount: number;
}

type PlayerStates = PileState[];

const player1IntialState: PlayerStates = [
    {
        id: "A1",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "A2",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "A3",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "A4",
        pos: 0,
        travelcount: 0,
    },
];

const player2IntialState: PlayerStates = [
    {
        id: "B1",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "B2",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "B3",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "B4",
        pos: 0,
        travelcount: 0,
    },
];

const player3IntialState: PlayerStates = [
    {
        id: "C1",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "C2",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "C3",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "C4",
        pos: 0,
        travelcount: 0,
    },
];
export type PlayerPiece = typeof player1IntialState | typeof player2IntialState | typeof player3IntialState | typeof player4IntialState;

const player4IntialState: PlayerStates = [
    {
        id: "D1",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "D2",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "D3",
        pos: 0,
        travelcount: 0,
    },
    {
        id: "D4",
        pos: 0,
        travelcount: 0,
    },
];

interface Winner {
    player: number;
    postion: number;
}

interface InitialState {
    player1: PlayerStates;
    player2: PlayerStates;
    player3: PlayerStates;
    player4: PlayerStates;
    currentPlayerTurn: number;
    diceNumber: number;
    isDiceRolled: boolean;
    pileSelectionPlayer: number;
    cellSelectionPlayer: number;
    touchDisableDice: boolean;
    currentPosition: number[];
    fireWork: boolean;
    winner: Winner[];
}

export const initialState :InitialState = {
    player1: player1IntialState,
    player2: player2IntialState,
    player3: player3IntialState,
    player4: player4IntialState,
    currentPlayerTurn: 1,
    diceNumber:6,
    isDiceRolled: false,
    pileSelectionPlayer: -1,
    cellSelectionPlayer: -1,
    touchDisableDice: false,
    currentPosition: [],
    fireWork: false,
    winner: [],
}