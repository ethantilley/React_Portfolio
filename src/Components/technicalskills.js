/*
  This file is a componet for the technical skills section of the portfolio site.
    (Will display my skills in varying tech)
  It contains all the code for that specific section of the site!!

*/


import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import CSSL from '../Media/css-logo.png';
class Resume extends Component {
    render() {
        return (
            <div className="tech-skills-body">
                <Grid className="tech-skills-grid">
                    <Cell col={12} row={12}>
                        <h1 className="page-title">TECHNICAL SKILLS</h1>
                        <div className="skill-imgs-grid">
                            <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                              <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />  <img src={CSSL}
                            alt="ts-react"
                            className="ts-react"
                        />  <img src={CSSL}
                        alt="ts-react"
                        className="ts-react"
                    />  <img src={CSSL}
                    alt="ts-react"
                    className="ts-react"
                />  <img src={CSSL}
                alt="ts-react"
                className="ts-react"
            />  <img src={CSSL}
            alt="ts-react"
            className="ts-react"
        />  <img src={CSSL}
        alt="ts-react"
        className="ts-react"
    />  <img src={CSSL}
    alt="ts-react"
    className="ts-react"
/>  <img src={CSSL}
                                alt="ts-react"
                                className="ts-react"
                            />
                        </div>

                    </Cell>



                </Grid>
            </div>

        )
    }
}

export default Resume;
