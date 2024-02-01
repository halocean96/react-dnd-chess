import { canMoveFn, ChessPiece } from "./constant";

const getDiff = (diff: number, toDiff: number) => Math.abs(diff - toDiff)

const knightCanMove: canMoveFn = (currentPosition, toX, toY) => {
  const { x, y } = currentPosition;
  const dx = getDiff(x, toX);
  const dy = getDiff(y, toY);
  return (
    (dx === 2 && dy === 1) ||
    (dx === 1 && dy === 2)
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

const kingCanMove: canMoveFn = (currentPosition, toX, toY) => {
  const {x,y} = currentPosition
  const dx = getDiff(x, toX)
  const dy = getDiff(y, toY)
  return (
    (dx === 1 && dy === 0) ||
    (dx === 0 && dy === 1) ||
    (dx === 1 && dy === 1)
  )
}

const canMoveByPiece = {
  [ChessPiece.knight]: knightCanMove,
  [ChessPiece.Rook]: rookCanMove,
  [ChessPiece.King]: kingCanMove
} as const;

export default canMoveByPiece;
