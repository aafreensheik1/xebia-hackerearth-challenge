import React from 'react';
import { Card } from '../../../components';

import './skillsSection.scss';

export default function EducationSection({ id, skills }) {
  return (
    <div id={id}>
      <h3>Professional Skillset</h3>
      <Card>
        <ul className="skillset">
          {skills.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
