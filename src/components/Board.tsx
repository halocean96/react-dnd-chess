import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Piece from "./Piece";
import Square from "./Square";
import useChessStore from "../stores/chess";

function RenderSquare(i: number) {
  const getTargetPiece = useChessStore((v) => v.getTargetPiece);
  const x = i % 8;
  const y = Math.floor(i / 8);
  const type = getTargetPiece(x, y);
  const piece = type ? <Piece type={type} /> : null;
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <Square x={x} y={y}>
        {piece}
      </Square>
    </div>
  );
}

function Board() {
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
        {new Array(8 * 8).fill(null).map((_, i) => RenderSquare(i))}
      </div>
    </DndProvider>
  );
}

export default Board;
