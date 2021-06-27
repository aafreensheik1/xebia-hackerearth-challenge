import React from 'react';
import EducationCard from './EducationCard';
import { Card } from '../../../components';

export default function EducationSection({ id, education }) {
  return (
    <div id={id}>
      <h3>Education</h3>
      <Card>
        <ul type="square">
          {education.map(({ institute, major, marks, year }) => (
            <li key={major}>
              <p style={{ fontWeight: 'bold' }}>{major}</p>
              <p>{`${institute} (${year})`}</p>
              <p>{marks}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
