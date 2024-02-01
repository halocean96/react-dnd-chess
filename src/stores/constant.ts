export enum ChessPiece {
  knight = "knight",
  Rook = "Root",
}

export type ChessPiecePosition = {
  id: string;
  type: ChessPiece;
  x: number;
  y: number;
};

export type canMoveFn = (
  currentPosition: { x: number; y: number },
  toX: number,
  toY: number
) => boolean;

export type ChessStore = {
  chessPiecePosition: ChessPiecePosition[];
  movePiece: ({ x, y, id }: { x: number; y: number; id: string }) => void;
  canMovePiece: ({
    id,
    toX,
    toY,
    type,
  }: {
    id: string;
    toX: number;
    toY: number;
    type: ChessPiece;
  }) => boolean;
  getTargetPiece: (x: number, y: number) => ChessPiecePosition | null;
};

export const initialChessPiecePosition: ChessPiecePosition[] = [
  {
    id: "1",
    type: ChessPiece.knight,
    x: 0,
    y: 1,
  },
  {
    id: "2",
    type: ChessPiece.knight,
    x: 3,
    y: 3,
  },
  {
    id: "3",
    type: ChessPiece.Rook,
    x: 5,
    y: 3,
  },
  {
    id: "4",
    type: ChessPiece.Rook,
    x: 1,
    y: 4,
  },
];
