import React, { useMemo, useState } from "react";
import type { Plant } from "./types";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Banner from "./components/Banner.tsx";
import PlantList from "./components/PlantList.tsx";
import PlantForm from "./components/PlantForm.tsx";
import PlantCard from "./components/PlantCard.tsx";
import PeopleDropdown from "./components/PeopleDropDown.tsx";
 
interface AppProps {
  plants: Plant[];   // <-- FIXED
}
const App: React.FC<AppProps> = ({ plants: initialPlants }) => {

  
 const [plants, setPlants] = useState<Plant[]>(initialPlants);

  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);


  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  
  const [success, setSuccess] = useState("");

  
  const handleAdd = (newPlant: Omit<Plant, "id">) => {
    const plant: Plant = {
      ...newPlant,
      id: Date.now()
    };

    setPlants(prev => [...prev, plant]);
    setSuccess(`Plant "${plant.name}" added successfully!`);

    // Auto-select new plant
    setSelectedPlant(plant);

    // Clear success after 3 seconds
    setTimeout(() => setSuccess(""), 3000);
  };

  // -------------------------------------------
  // Delete Plant
  // -------------------------------------------
  const handleDelete = (id: number) => {
    setPlants(prev => prev.filter(p => p.id !== id));

    if (selectedPlant?.id === id) {
      setSelectedPlant(null);
    }
  };

  // -------------------------------------------
  // Task 8: Filtering Logic (useMemo)
  // -------------------------------------------
  const filteredPlants = useMemo(() => {
    return plants.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesDifficulty =
        difficultyFilter === "All" || p.difficulty === difficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }, [plants, search, difficultyFilter]);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner>
        <h3>Welcome to the Mini Nursery</h3>
      </Banner>

      <div className="container my-4">
        {/* Success message */}
        {success && (
          <div className="alert alert-success">{success}</div>
        )}

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-4">

            {/* Search Bar */}
            <input
              className="form-control mb-2"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Difficulty Filter */}
            <select
              className="form-select mb-2"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            {/* Reset Filters */}
            <button
              className="btn btn-secondary mb-3"
              onClick={() => {
                setSearch("");
                setDifficultyFilter("All");
              }}
            >
              Reset Filters
            </button>

            {/* Plant List */}
            <PlantList
              plants={filteredPlants}
              selectedId={selectedPlant?.id ?? null}
              onSelect={(plant) => setSelectedPlant(plant)}
            />

            {/* People Dropdown */}
            <PeopleDropdown onSelect={(u) => console.log("Selected user:", u)} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-8">

            {/* Add Plant Form */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Add New Plant</h5>
                <PlantForm onAdd={handleAdd} />
              </div>
            </div>

            {/* Selected Plant Card */}
            {selectedPlant && (
              <>
                <h5>Selected Plant</h5>
                <PlantCard plant={selectedPlant} onDelete={handleDelete} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
