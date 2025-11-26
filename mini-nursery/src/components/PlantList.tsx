
import React from "react";
import type { Plant } from "../types";
interface Props {
  plants: Plant[];
  selectedId?: number | null;
  onSelect: (plant: Plant) => void; // REQUIREMENT: send whole plant
}

const PlantList: React.FC<Props> = ({ plants, selectedId, onSelect }) => {
  return (
    <div className="list-group">
      {plants.map((p) => (
        <button
          key={p.id}
          type="button"
          className={
            "list-group-item list-group-item-action d-flex flex-column" +
            (selectedId === p.id ? " active" : "")
          }
          onClick={() => onSelect(p)}  // <-- send full plant object
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">{p.name}</h6>
              <small className="text-muted">{p.scientific}</small>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlantList;

