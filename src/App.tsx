import Board from "./components/Board";
import useChessStore from "./stores/chess";

function App() {
  const knightPosition = useChessStore((state) => state.knightPosition);

  return <Board knightPosition={knightPosition} />;
}

export default App;
