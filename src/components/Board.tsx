import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Knight from "./Knight";
import Square from "./Square";

function RenderSquare(i: number, [knightX, knightY]: [number, number]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const piece = isKnightHere ? <Knight /> : null;
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <Square x={x} y={y}>
        {piece}
      </Square>
    </div>
  );
}

type BoardProps = {
  knightPosition: [number, number];
};

function Board({ knightPosition }: BoardProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          border: "2px solid black",
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {new Array(8 * 8)
          .fill(null)
          .map((_, i) => RenderSquare(i, knightPosition))}
      </div>
    </DndProvider>
  );
}

export default Board;
