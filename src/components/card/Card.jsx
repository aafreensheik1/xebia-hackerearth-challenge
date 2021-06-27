import React from 'react';
import './card.scss';

export default function Card({ children, className, onClick }) {
  const classes = className ? `card-container ${className}` : 'card-container';
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
}
