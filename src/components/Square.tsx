import { useDrop } from "react-dnd";
import useChessStore from "../stores/chess";
import { ItemTypes } from "../constant/dnd";
import { ChessPiece } from "../stores/constant";

const Overlay = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        height: "100%",
        backgroundColor: color,
        opacity: 0.5,
      }}
    />
  );
};

type SquareProps = {
  x: number;
  y: number;
  children: React.ReactNode;
};
function Square({ x, y, children }: SquareProps) {
  const { movePiece, canMovePiece } = useChessStore();
  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const storke = black ? "white" : "black";
  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: ItemTypes.CHESS_PIECE,
    drop: (item: { id: string; type: ChessPiece }) => {
      movePiece({ x, y, id: item.id });
    },
    canDrop: ({ id, type }) => {
      return canMovePiece({ id, type, toX: x, toY: y });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  return (
    <div
      ref={dropRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: fill,
        color: storke,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
}

export default Square;
