import React, { Component } from 'react';
import {
  Header,
  Navigation,
} from 'react-mdl'

import { Link } from 'react-router-dom';

class HeaderBar extends Component {	
	render() {
		return (	
            <Header className="header" title="Ethan Tilley">
                <Navigation >
                    <Link to="/landingpage" className="header-nav">
                    Home</Link>
                    <Link to="/projects" className="header-nav">
                    Projects</Link>
                    <Link to="/resume" className="header-nav">
                    Resume</Link>
                    <Link to="/writings" className="header-nav">
                    Writings</Link>
                    <Link to="/aboutme" className="header-nav">
                    About Me</Link>
                </Navigation>
            </Header>
        );
    }
}

export default HeaderBar;
