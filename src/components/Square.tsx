type SquareProps = {
  x: number;
  y: number;
  children: React.ReactNode;
};
function Square({ x, y, children }: SquareProps) {
  const black = (x + y) % 2 === 1;
  const fill = black ? "black" : "white";
  const storke = black ? "white" : "black";
  return (
    <div
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
    </div>
  );
}

export default Square;
