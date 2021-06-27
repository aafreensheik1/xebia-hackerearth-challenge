import React from 'react';
import './card.scss';

export default function Card({ children }) {
  return <div className="card-container">{children}</div>;
}
