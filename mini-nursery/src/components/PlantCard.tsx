import React from "react";
import type { Plant } from "../types";

const LightIcons: Record<string, string> = {
  Low: "🌙",
  Medium: "🌤️",
  Bright: "☀️",
};

const WaterIcons: Record<string, string> = {
  Low: "💧",
  Moderate: "💧💧",
  Frequent: "💧💧💧",
};

interface Props {
  plant: Plant;
  onDelete: (id: number) => void;   // ✅ added
}

const PlantCard: React.FC<Props> = ({ plant, onDelete }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {plant.name}{" "}
          <small className="text-muted">({plant.scientific})</small>
        </h5>

        <p className="card-text">{plant.description}</p>

        {/* Difficulty + Rarity */}
        <div className="mb-2">
          <span className="badge bg-secondary me-1">{plant.difficulty}</span>
          {plant.rarity && (
            <span className="badge bg-info text-dark me-1">
              {plant.rarity}
            </span>
          )}
        </div>

        {/* Light */}
        <div className="mb-2">
          <strong className="me-2">Light:</strong>
          <span className="me-2">{LightIcons[plant.light]}</span>
          <small className="text-muted">{plant.light}</small>
        </div>

        {/* Water */}
        <div className="mb-3">
          <strong className="me-2">Water:</strong>
          <span className="me-2">{WaterIcons[plant.water]}</span>
          <small className="text-muted">{plant.water}</small>
        </div>

        {/* Buttons */}
        <div>
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => alert(`Details for: ${plant.name}`)}   // ✅ added
          >
            View Details
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(plant.id)}                  
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
