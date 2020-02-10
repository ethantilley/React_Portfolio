import React from 'react';
import {HashRouter, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './AboutMe/aboutme.js';
import Projects from './projects';
import Resume from './resume';
import Writings from './writings';


const Main = () => (
  
  <HashRouter>
    <Route exact component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/witings" component={Writings} />
  </HashRouter>
)

export default Main;
