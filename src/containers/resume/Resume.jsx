import React from 'react';
import ProfileSection from './profile/ProfileSection';
import ExperienceSection from './experience/ExperienceSection';
import EducationSection from './education/EducationSection';
import SkillsSection from './skills/SkillsSection';
import ContactSection from './contact/ContactSection';
import data from '../../assets/data';

export default function Resume() {
  const { profile, experience, education, skills } = data;
  return (
    <main className="content">
      <ProfileSection id="AboutMe" profile={profile} />
      <ExperienceSection id="Experience" experience={experience} />
      <EducationSection id="Education" education={education} />
      <SkillsSection id="Skills" skills={skills} />
      <ContactSection id="Contact" />
    </main>
  );
}
