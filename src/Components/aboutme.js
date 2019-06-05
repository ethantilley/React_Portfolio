/*
  This file is a componet for the about me section of the portfolio site.

  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Grid, Cell,ListItem, List, ListItemContent } from 'react-mdl';
class AboutMe extends Component {
  render() {
    return(
      <div className = "contact-body">
        <Grid className= "contact-grid">
          <Cell col = {6}>
            <h2> About Me </h2>
            <img
            src = {require('../Media/ProfilePic.jpg')}
            alt = "ProfilePic"
            className = "ProfilePic"
            style={{height: '250px'}}
            />
            <h2> Ethan Tilley </h2>
            <p style = {{width: '75%', margin: 'auto', paddingTop: "1em"}} >
            Hello! Im Ethan Tilley, I’m a developer based in Brisbane previously studied Game Development at SAE majoring in Programming, now actively looking for work. Although I love all kinds of programming, I like to focus my spare time on AI programming.
            </p>


          </Cell>
          <Cell col = {6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">

              <List style={{align: 'center'}}>
                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden=true />
                    0423448291
                  </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default AboutMe;
