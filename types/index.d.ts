declare global {
  type Side = "red" | "blue";

  type Position = {
    row: number;
    column: number;
  };
}

export { Side };
