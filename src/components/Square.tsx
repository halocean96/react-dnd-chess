import { useDrop } from "react-dnd";
import useChessStore from "../stores/chess";
import { ItemTypes } from "../constant/dnd";
type SquareProps = {
  x: number;
  y: number;
  children: React.ReactNode;
};
function Square({ x, y, children }: SquareProps) {
  const { canMoveKnight, moveKnight } = useChessStore();
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        if (canMoveKnight(x, y)) moveKnight(x, y);
      },
      canDrop: () => canMoveKnight(x, y),
      collect(monitor) {
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        };
      },
    }),
    [x, y]
  );
  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const storke = black ? "white" : "black";
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
      {isOver || canDrop ? (
        <div
          style={{
            backgroundColor: "red",
            opacity: 0.5,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        />
      ) : null}
      {children}
    </div>
  );
}

export default Square;
