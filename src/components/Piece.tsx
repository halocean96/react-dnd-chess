import { ItemTypes } from "../constant/dnd";
import { useDrag } from "react-dnd";
import { ChessPiece } from "../stores/constant";

type PieceProps = {
  id: string;
  type: ChessPiece;
};

const pieceCharMap = {
  [ChessPiece.knight]: "♘",
  [ChessPiece.Rook]: "♖",
};

function Piece({ type, id }: PieceProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CHESS_PIECE,
    item: { type, id },
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
          fontSize: "44px",
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
