import React from 'react';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';

import './index.scss';

class Footer extends React.Component<Props> {
	onIconClick = (link) => {
		window.open(link, "_blank")
	}

	render() {
		return (
			<div className="Footer">
				<div className="Footer-Left"
				><span className="Footer-Insignia">Property of Mumbo Inc.</span>
				</div>
				<div className="Footer-Right">
					<div className="Footer-SocialMedia">
						<LinkedIn onClick={() => this.onIconClick("https://www.linkedin.com/in/mark-toh/")} />
						<Github onClick={() => this.onIconClick("https://github.com/marktoh")}/>
					</div>
				</div>
      		</div>
		)
	}
}
export default Footer;