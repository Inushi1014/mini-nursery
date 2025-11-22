import React from "react";
import type { Plant } from "../types";

const LightIcons: Record<string, string> = {
  Low: "🌙",
  Medium: "🌤️",
  Bright: "☀️"
};

const WaterIcons: Record<string, string> = {
  Low: "💧",
  Moderate: "💧💧",
  Frequent: "💧💧💧"
};

interface Props {
  plant: Plant;
}

const PlantCard: React.FC<Props> = ({ plant }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
          {plant.name} <small className="text-muted">({plant.scientific})</small>
        </h5>

        <p className="card-text">{plant.description}</p>

        <div className="mb-2">
          <span className="badge bg-secondary me-1">{plant.difficulty}</span>
          {plant.rarity && <span className="badge bg-info text-dark me-1">{plant.rarity}</span>}
        </div>

        <div className="mb-2">
          <strong className="me-2">Light:</strong>
          <span className="me-2">{LightIcons[plant.light]}</span>
          <small className="text-muted">{plant.light}</small>
        </div>

        <div className="mb-3">
          <strong className="me-2">Water:</strong>
          <span className="me-2">{WaterIcons[plant.water]}</span>
          <small className="text-muted">{plant.water}</small>
        </div>

        <div>
          <button className="btn btn-outline-primary btn-sm me-2" disabled>View</button>
          <button className="btn btn-outline-danger btn-sm" disabled>Buy (UI-only)</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
