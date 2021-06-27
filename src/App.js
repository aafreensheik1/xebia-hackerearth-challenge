import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components';
import { Resume, Blogs, BlogPage, Navigation } from './containers';
import './style.scss';

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/blogs/:id" component={BlogPage} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/" component={Resume} />
      </Switch>
      <Footer>
        <span>
          Created by Aafreen Sheik for Xebia - Hackerearth Frontend Hiring
          Challenge
        </span>
      </Footer>
    </div>
  );
}
