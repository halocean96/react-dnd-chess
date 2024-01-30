import { create } from "zustand";

type ChessStore = {
  knightPosition: [number, number];
  moveKnight: (toX: number, toY: number) => void;
  canMoveKnight: (toX: number, toY: number) => boolean;
};

const useChessStore = create<ChessStore>((set, get) => ({
  knightPosition: [0, 0],
  moveKnight: (toX: number, toY: number) => {
    set({ knightPosition: [toX, toY] });
  },
  canMoveKnight: (toX, toY) => {
    const currentKightPosition = get().knightPosition;
    const dx = toX - currentKightPosition[0];
    const dy = toY - currentKightPosition[1];
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  },
}));

export default useChessStore;
