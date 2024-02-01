import { create } from "zustand";
import { ChessStore, initialChessPiecePosition } from "./constant";
import canMoveByPiece from "./piece";

const useChessStore = create<ChessStore>((set, get) => ({
  chessPiecePosition: initialChessPiecePosition,
  movePiece: ({ x, y, id }) => {
    set(({ chessPiecePosition }) => ({
      chessPiecePosition: chessPiecePosition.map((v) =>
        v.id === id ? { ...v, x, y } : v
      ),
    }));
  },
  canMovePiece: ({ id, toX, toY, type }) => {
    const { x, y } = get().chessPiecePosition.find((v) => v.id === id) ?? {
      x: 0,
      y: 0,
    };
    const canMoveFn = canMoveByPiece[type];
    return canMoveFn({ x, y }, toX, toY);
  },
  getTargetPiece: (x, y) => {
    const targetPiece = get().chessPiecePosition.find(
      (piece) => piece.x === x && piece.y === y
    );
    return targetPiece ? targetPiece : null;
  },
}));

export default useChessStore;
