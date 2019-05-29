/*
  This file is a componet for the landing page section of the portfolio site.
    (home page that user lands on)
  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
          <img
          src={require('../Media/ProfilePic.jpg')}
          alt="ProfilePic"
          className="ProfilePic"
          />

          <div className="Banner-Text">
            <h1>Programmmer</h1>
            <hr></hr>
            <p>C# | C++ | CSS | HTML | JavaScript | Python </p>
          </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
