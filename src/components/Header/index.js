import React from 'react';

import './index.scss'

class Header extends React.Component<Props> {
	render() {
		return (
			<div className="Header">
				<div className="Header-Title">Formula 1</div>
				<div className="Header-Description">Season Overview</div>
			</div>
		)
	}
}

export default Header;