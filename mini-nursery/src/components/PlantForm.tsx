import React, { useState } from "react";

interface Props {
  onAdd: (plant: any) => void;  // You can replace "any" with a PlantInput type
}

const PlantForm: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    scientific: "",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Plant name is required.");
      return;
    }

    onAdd({ ...form }); // send new plant object to App

    // Clear form
    setForm({
      name: "",
      scientific: "",
      difficulty: "Easy",
      light: "Low",
      water: "Low",
      description: "",
    });
  };

  const handleClear = () => {
    setForm({
      name: "",
      scientific: "",
      difficulty: "Easy",
      light: "Low",
      water: "Low",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Plant name */}
      <div className="mb-3">
        <label className="form-label">Plant name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Plant name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      {/* Scientific name */}
      <div className="mb-3">
        <label className="form-label">Scientific name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Scientific name"
          name="scientific"
          value={form.scientific}
          onChange={handleChange}
        />
      </div>

      {/* Difficulty / Light / Water */}
      <div className="row g-2 mb-3">
        <div className="col">
          <label className="form-label">Difficulty</label>
          <select
            className="form-select"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Light</label>
          <select
            className="form-select"
            name="light"
            value={form.light}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Bright</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Water</label>
          <select
            className="form-select"
            name="water"
            value={form.water}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Moderate</option>
            <option>Frequent</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Short description</label>
        <textarea
          className="form-control"
          rows={2}
          placeholder="Short description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          Add Plant
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default PlantForm;
