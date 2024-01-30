import { ItemTypes } from "../constant/dnd";
import { useDrag } from "react-dnd";
import { ChessPiece } from "../stores/chess";

type PieceProps = {
  type: ChessPiece;
};

const pieceCharMap = {
  [ChessPiece.knight]: "♘",
  [ChessPiece.Rook]: "♖",
};

function Piece({ type }: PieceProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CHESS_PIECE,
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  return (
    <>
      <span
        ref={dragRef}
        style={{
          fontSize: "60px",
          opacity: isDragging ? 0.5 : 1,
          background: "none",
          cursor: "move",
        }}
      >
        {pieceCharMap[type]}
      </span>
    </>
  );
}

export default Piece;
