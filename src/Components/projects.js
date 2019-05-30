/*
  This file is a componet for the projects section of the portfolio site.
    (Lists, or will list, all the projects i've finished!)

  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }


  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:

          <img
          src = {require('../Media/ProfilePic.jpg')}
          alt = "Project1"
          className = "Project1"
          />

          }}> Unity Project #1

          </CardTitle>
          <CardText>
            This is a temp unity project!
          </CardText>
          <CardActions>
            <Button colored> Itch.io </Button>
            <Button colored> GitHub </Button>
            <Button colored> More Info </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:

          <img
          src = {require('../Media/ProfilePic.jpg')}
          alt = "Project1"
          className = "Project1"
          />

          }}> React Project #1

          </CardTitle>
          <CardText>
            This is a temp React project!
          </CardText>
          <CardActions>
            <Button colored> Itch.io </Button>
            <Button colored> GitHub </Button>
            <Button colored> More Info </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>      )
    } else if(this.state.activeTab === 2) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:

          <img
          src = {require('../Media/ProfilePic.jpg')}
          alt = "Project1"
          className = "Project1"
          />

          }}> Xamarin Project #1

          </CardTitle>
          <CardText>
            This is a temp Xamarin project!
          </CardText>
          <CardActions>
            <Button colored> Itch.io </Button>
            <Button colored> GitHub </Button>
            <Button colored> More Info </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>      )
    }
  }

  render() {
    return(
      <div className="project-category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
           this.setState({ activeTab: tabId })} ripple>

          <Tab>Unity</Tab>
          <Tab>React</Tab>
          <Tab>Xamarin</Tab>

        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">

            <Cell col={12}>

            <div className="project-content"> {this.toggleCategories()}</div>

            </Cell>

          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
