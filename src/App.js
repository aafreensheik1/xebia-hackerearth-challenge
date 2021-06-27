import React from 'react';
import { Navbar, Footer } from './components';
import { Resume } from './containers';
import './style.scss';

export default function App() {
  const navItemsLeft = [
    { title: 'ABOUT ME', url: 'AboutMe' },
    { title: 'EXPERIENCE', url: 'Experience' },
    { title: 'EDUCATION', url: 'Education' },
    { title: 'SKILLS', url: 'Skills' },
    { title: 'CONTACT', url: 'Contact' }
  ];
  const navItemsRight = [{ title: 'BLOGS', url: '/blogs' }];

  return (
    <div>
      <Navbar navItemsLeft={navItemsLeft} navItemsRight={navItemsRight} />
      <Resume />
      <Footer>
        <span>
          Created by Aafreen Sheik for Xebia - Hackerearth Frontend Hiring
          Challenge
        </span>
      </Footer>
    </div>
  );
}
