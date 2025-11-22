import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import type { Plant } from "./types";

const plants: Plant[] = [
  {
    id: 1,
    name: "Pilea peperomioides",
    scientific: "Pilea peperomioides",
    difficulty: "Easy",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Coin-shaped leaves; prefers bright, indirect light; easy to propagate."
  },
  {
    id: 2,
    name: "String of Hearts",
    scientific: "Ceropegia woodii",
    difficulty: "Easy",
    light: "Bright",
    water: "Low",
    rarity: "Common",
    description: "Delicate trailing plant with heart-shaped leaves."
  },
  {
    id: 3,
    name: "ZZ Plant",
    scientific: "Zamioculcas zamiifolia",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "Very tolerant; great for low-light spots and beginners."
  }
];

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App plants={plants} />
  </React.StrictMode>
);

