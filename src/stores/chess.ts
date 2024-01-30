import { create } from "zustand";

export enum ChessPiece {
  knight = "knight",
  Rook = "Root",
}

export type ChessPiecePosition = {
  type: ChessPiece;
  x: number;
  y: number;
};

type ChessStore = {
  chessPiecePosition: ChessPiecePosition[];
  movePiece: (toX: number, toY: number, type: ChessPiece) => void;
  canMovePiece: (toX: number, toY: number, type: ChessPiece) => boolean;
  getTargetPiece: (x: number, y: number) => ChessPiece | null;
};

const initialChessPiecePosition: ChessPiecePosition[] = [
  {
    type: ChessPiece.knight,
    x: 0,
    y: 1,
  },
  {
    type: ChessPiece.knight,
    x: 3,
    y: 3,
  },
  {
    type: ChessPiece.Rook,
    x: 5,
    y: 3,
  },
  {
    type: ChessPiece.Rook,
    x: 1,
    y: 4,
  },
];

const useChessStore = create<ChessStore>((set, get) => ({
  chessPiecePosition: initialChessPiecePosition,
  movePiece: (toX, toY, type) => {},
  canMovePiece: (toX, toY, type) => {
    return true;
  },
  getTargetPiece: (x, y) => {
    const targetPiece = get().chessPiecePosition.find(
      (piece) => piece.x === x && piece.y === y
    );
    return targetPiece ? targetPiece.type : null;
  },
}));

export default useChessStore;
