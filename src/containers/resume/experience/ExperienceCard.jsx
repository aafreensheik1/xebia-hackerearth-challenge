import React from 'react';
import { Card } from '../../../components';
import './experienceCard.scss';

export default function ExperienceComponent({
  company,
  role,
  tenure,
  description
}) {
  return (
    <Card>
      <div className="experience-card">
        <div className="experience-section-1">
          <span className="company">{company}</span>
          <span className="role">{role}</span>
          <span className="tenure">{tenure}</span>
        </div>
        <div className="experience-section-2">
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}
