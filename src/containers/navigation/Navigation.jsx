import React from 'react';
import { Navbar } from '../../components';

export default function Navigation() {
  const navItemsRight = [
    { title: 'ABOUT ME', url: 'AboutMe' },
    { title: 'EXPERIENCE', url: 'Experience' },
    { title: 'EDUCATION', url: 'Education' },
    { title: 'SKILLS', url: 'Skills' },
    { title: 'CONTACT', url: 'Contact' }
  ];
  const navItemsLeft = [
    { title: 'BLOGS', url: '/blogs' },
    { title: 'HOME', url: '/' }
  ];

  return <Navbar navItemsLeft={navItemsLeft} navItemsRight={navItemsRight} />;
}
