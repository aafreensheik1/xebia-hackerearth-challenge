import React from 'react';
import './card.scss';

export default function Card({ children, className }) {
  const classes = className ? `card-container ${className}` : 'card-container';
  return <div className={classes}>{children}</div>;
}
