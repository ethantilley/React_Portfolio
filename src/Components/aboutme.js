/*
  This file is a componet for the about me section of the portfolio site.

  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
class AboutMe extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={4}>
            <span className="aboutme-photo">

              <img
                src={require('../Media/ProfilePic.jpg')}
                alt="ProfilePic"
                className="ProfilePic"
                />

            </span>
          </Cell>        
          <Cell col={7}>
              <div className="about-me-info" style={{ fontFamily: 'Oxygen' }}>

              <h2> FIRST, A LITTLE BIT ABOUT ME </h2>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }} >
              I’m a Software Engineer based in Brisbane. I personally thrive most when I’m surrounded by a talented team, helping them to bring their creative vision to life. All while learning anything and everything to improve and become a better developer.            </p>
            </div>
            </Cell>
        </Grid>

      </div>
    )
  }
}

export default AboutMe;
