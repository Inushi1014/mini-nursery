import React, { useState } from "react";
import type { Plant } from "./types";
import PlantList from "./components/PlantList.tsx";
import PlantForm from "./components/PlantForm.tsx";
import PlantCard from "./components/PlantCard.tsx";

interface AppProps {
  plants: Plant[];
}

const App: React.FC<AppProps> = ({ plants }) => {
  const [selectedId, setSelectedId] = useState<number | null>(plants[0]?.id ?? null);

  const selectedPlant = plants.find(p => p.id === selectedId) ?? plants[0];

  return (
    <div className="container my-4">
      <h2 className="mb-4">Mini Indoor Plant Nursery</h2>

      <div className="row">
        {/* LEFT: plant list */}
        <div className="col-md-4">
          <input className="form-control mb-3" placeholder="Search plants (UI-only)" disabled />
          <PlantList plants={plants} selectedId={selectedId} onSelect={(id) => setSelectedId(id)} />
        </div>

        {/* RIGHT: form + featured card */}
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Add New Plant (UI-only)</h5>
              <PlantForm />
            </div>
          </div>

          <h5>Featured plant</h5>
          {selectedPlant && <PlantCard plant={selectedPlant} />}
        </div>
      </div>
    </div>
  );
};

export default App;
