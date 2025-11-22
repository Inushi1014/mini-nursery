import React from "react";

const PlantForm: React.FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Plant name</label>
        <input type="text" className="form-control" placeholder="Plant name" disabled />
      </div>

      <div className="mb-3">
        <label className="form-label">Scientific name</label>
        <input type="text" className="form-control" placeholder="Scientific name" disabled />
      </div>

      <div className="row g-2 mb-3">
        <div className="col">
          <label className="form-label">Difficulty</label>
          <select className="form-select" disabled>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Light</label>
          <select className="form-select" disabled>
            <option>Low</option>
            <option>Medium</option>
            <option>Bright</option>
          </select>
        </div>

        <div className="col">
          <label className="form-label">Water</label>
          <select className="form-select" disabled>
            <option>Low</option>
            <option>Moderate</option>
            <option>Frequent</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Short description</label>
        <textarea className="form-control" rows={2} placeholder="Short description" disabled />
      </div>

      <div className="d-flex gap-2">
        <button type="button" className="btn btn-primary" disabled>Add Plant</button>
        <button type="button" className="btn btn-secondary" disabled>Clear</button>
      </div>
    </form>
  );
};

export default PlantForm;
