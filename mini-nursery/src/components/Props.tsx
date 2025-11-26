import type { Plant } from "../types";

export interface Props {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (plant: Plant) => void;
}
