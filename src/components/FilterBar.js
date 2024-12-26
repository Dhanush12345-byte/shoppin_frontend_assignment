import React from 'react';

const FilterBar = ({ statusFilter, setStatusFilter }) => (
  <div className="filter-bar">
    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
      <option value="">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
);

export default FilterBar;