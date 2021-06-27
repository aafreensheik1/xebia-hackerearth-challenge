import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../components';

export default function Navigation() {
  const [isHomePage, setIsHomePage] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsHomePage(!pathname.includes('blog'));
  }, [pathname]);

  const navItemsRight = isHomePage
    ? [
        { title: 'ABOUT ME', url: 'AboutMe' },
        { title: 'EXPERIENCE', url: 'Experience' },
        { title: 'EDUCATION', url: 'Education' },
        { title: 'SKILLS', url: 'Skills' },
        { title: 'CONTACT', url: 'Contact' }
      ]
    : [];
  const navItemsLeft = isHomePage
    ? [{ title: 'BLOGS', url: '/blogs' }]
    : [{ title: 'HOME', url: '/' }];

  return <Navbar navItemsLeft={navItemsLeft} navItemsRight={navItemsRight} />;
}
