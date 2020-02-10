/*
  This file is a componet for the landing page section of the portfolio site.
    (home page that user lands on)
  It contains all the code for that specific section of the site!!

*/
import React, {
	Component
} from 'react';


import {
	Grid,
	Cell,
	Navigation,
	Layout
} from 'react-mdl';

import  { Scroller, scrollInitalState } from 'react-scrollbar';

import AboutMe from './AboutMe/aboutme.js';
import TechSkills from './technicalskills';

class Landing extends Component {	
	render() {
		return (		
		<Layout className="home-content">
			
				<section className = "aboutme-page" style={{ width: '100%' }}>
					<AboutMe/>
				
				</section>

				<section className="tech-skills-page " style={{ width: '100%' }}>
					<TechSkills/>
				</section>
					{/* <section className = "landing-page" style={{ width: '100%' }}>
						<Grid className="landing-grid" >
							<Cell col={12} row={12}>
							
								<div className="technical-skills" >
									<h1> Technical Skills </h1>
									<hr />
									<div className="ts-images">

										<div className="react-img">
											<img src={require('../Media/react-logo.png')}
												alt="ts-react"
												className="ts-react"
											/>

										</div>

										<div className="css-img" >
											<img src={require('../Media/css-logo.png')}
												alt="ts-css"
												className="ts-css"
											/>
										</div>

									</div>
								</div>

								<div className="banner-text" >

									<h1> Programmmer </h1>
									<hr />
									<p> C# | C++ | CSS | HTML | JavaScript | Python </p>
											<i className="fa fw-fa fa-github"/>
											<i className="fa fw-fa fa-github"/>
											<i className="fa fw-fa fa-github"/>
											<i className="fa fw-fa fa-github"/>
											
										

								</div>
								
								
					
							</Cell>
						</Grid>
					</section> */}
				
				</Layout>
		)
	}
}

export default Landing;
