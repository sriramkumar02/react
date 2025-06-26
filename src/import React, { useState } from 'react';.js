import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const sampleProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    start: '2025-06-01',
    end: '2025-08-15',
    milestones: [
      { name: 'Wireframes', date: '2025-06-10' },
      { name: 'Prototype', date: '2025-06-25' },
      { name: 'Launch', date: '2025-08-15' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Launch',
    start: '2025-07-01',
    end: '2025-09-30',
    milestones: [
      { name: 'MVP', date: '2025-07-20' },
      { name: 'Beta Release', date: '2025-08-15' },
      { name: 'Public Release', date: '2025-09-30' },
    ],
  },
];

function Dashboard() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="dashboard">
      {!selected ? (
        <ProjectList projects={sampleProjects} onSelect={setSelected} />
      ) : (
        <ProjectDetails project={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}

export default Dashboard;