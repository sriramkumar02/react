import React from "react";

function MilestoneList({ milestones }) {
  return (
    <div className="milestone-list">
      <h3>Milestones</h3>
      <ul>
        {milestones.map((m, idx) => (
          <li key={idx}>
            <strong>{m.name}</strong> — {m.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MilestoneList;