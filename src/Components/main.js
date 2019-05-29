import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Writings from './writings';


const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/witings" component={Writings} />




  </Switch>
)

export default Main;
