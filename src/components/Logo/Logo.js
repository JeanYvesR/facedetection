import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import face from './face.png'

const Logo = () => {
	return (
			<div className="ma4 mt0">
				<Tilt className='Tilt'>
			      <div>
			        <img alt='logo' src={face} />
			      </div>
			    </Tilt>
			</div>
		);
};

export default Logo;