export type Difficulty = "Easy" | "Medium" | "Hard";
export type LightLevel = "Low" | "Medium" | "Bright";
export type WaterLevel = "Low" | "Moderate" | "Frequent";
export type Rarity = "Common" | "Uncommon" | "Rare";

export interface Plant {
  id: number;
  name: string;
  scientific?: string;
  difficulty: Difficulty;
  light: LightLevel;
  water: WaterLevel;
  rarity?: Rarity;
  description: string;
}
