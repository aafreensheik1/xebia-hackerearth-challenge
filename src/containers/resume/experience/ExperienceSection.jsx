import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection({ id, experience }) {
  return (
    <div id={id}>
      <h3>Experience</h3>
      {experience.map(item => (
        <ExperienceCard key={item.company} {...item} />
      ))}
    </div>
  );
}
