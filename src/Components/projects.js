/*
  This file is a componet for the projects section of the portfolio site.
    (Lists, or will list, all the projects i've finished!)

  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }


  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
      <div><h1>Unity!!!</h1></div>
      )
    } else if(this.state.activeTab === 1) {
      return(
      <div><h1>React!!!</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return(
      <div><h1>Xamarin!!!</h1></div>
      )
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
