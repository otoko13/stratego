declare global {
  type Side = "red" | "blue";

  type Position = {
    row: number;
    column: number;
  };

  type Soldier = {
    rank: number;
    position?: Position;
    activated: boolean;
    alive: boolean;
  };
}

export { Side };
