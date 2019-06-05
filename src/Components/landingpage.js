/*
  This file is a componet for the landing page section of the portfolio site.
    (home page that user lands on)
  It contains all the code for that specific section of the site!!

*/
import React, {	Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style = { {width: '100%', margin: 'auto'} }>
			<Grid className = "landing-grid" >
			<Cell col = {12} row = {12}>
			<div>
			<img
			src = {require('../Media/ProfilePic.jpg')}
			alt = "ProfilePic"
			className = "ProfilePic"
			/>
</div>
			<div className= "technical-skills">
				<h1> Technical Skills </h1>
				<hr/>
				<div className = "ts-images">

					<div className = "react-img">
					<img
						src = {require('../Media/react-logo.png')}
						alt = "ts-react"
						className = "ts-react"
						/>

					</div>

					<div className = "css-img">
						<img
							src = {require('../Media/css-logo.png')}
							alt = "ts-css"
							className = "ts-css"
							/>
					</div>

				</div>
			</div>

			<div className = "Banner-Text">
				<h1> Programmmer </h1>
				<hr/>
				<p> C# | C++ | CSS | HTML | JavaScript | Python </p>
					<div className="social-links">

					{/* LinkedIn */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank"
             <i className="fa fa-linkedin-square" aria-hidden="true" />
           />

           {/* Github */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-github-square" aria-hidden="true" />
           </a>

           {/* Freecodecamp */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-free-code-camp" aria-hidden="true" />
           </a>

           {/* Youtube */}
           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-youtube-square" aria-hidden="true" />
           </a>


				 </div>

			</div>

		</Cell>
		</Grid>
	</div>
		)
	}
}

export default Landing;
