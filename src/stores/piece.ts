import { canMoveFn, ChessPiece } from "./constant";

const knightCanMove: canMoveFn = (currentPosition, toX, toY) => {
  const { x, y } = currentPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

const rookCanMove: canMoveFn = (currentPosition, toX, toY) => {
  const { x, y } = currentPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (
    (dx === 0 && dy !== 0) ||
    (dx !== 0 && dy === 0)
  );
};

const canMoveByPiece = {
  [ChessPiece.knight]: knightCanMove,
  [ChessPiece.Rook]: rookCanMove,
} as const;

export default canMoveByPiece;
