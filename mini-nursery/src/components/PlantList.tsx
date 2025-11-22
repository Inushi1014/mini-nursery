import React from "react";
import type { Plant } from "../types";

interface Props {
  plants: Plant[];
  selectedId?: number | null;
  onSelect: (id: number) => void;
}

const PlantList: React.FC<Props> = ({ plants, selectedId, onSelect }) => {
  return (
    <div className="list-group">
      {plants.map(p => (
        <button
          key={p.id}
          type="button"
          className={
            "list-group-item list-group-item-action d-flex flex-column" +
            (selectedId === p.id ? " active" : "")
          }
          onClick={() => onSelect(p.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">{p.name}</h6>
              <small className="text-muted">{p.scientific}</small>
            </div>
            <div className="text-end">
              <div>
                <span className="badge bg-secondary me-1">{p.difficulty}</span>
                {p.rarity && <span className="badge bg-info text-dark">{p.rarity}</span>}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlantList;
