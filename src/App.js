import React from 'react';
import { Navbar, Footer } from './components';
import {
  ProfileSection,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  ContactSection
} from './containers';
import data from './assets/data';
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
  const { profile, experience, education, skills } = data;
  return (
    <div>
      <Navbar navItemsLeft={navItemsLeft} navItemsRight={navItemsRight} />
      <main className="content">
        <ProfileSection id="AboutMe" profile={profile} />
        <ExperienceSection id="Experience" experience={experience} />
        <EducationSection id="Education" education={education} />
        <SkillsSection id="Skills" skills={skills} />
        <ContactSection id="Contact" />
      </main>
      <Footer>
        <span>
          Created by Aafreen Sheik for Xebia - Hackerearth Frontend Hiring
          Challenge
        </span>
      </Footer>
    </div>
  );
}
