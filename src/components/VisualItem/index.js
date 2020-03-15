import React from 'react';
import { FaExternalLinkAlt as RedirectIcon} from 'react-icons/fa'
import moment from 'moment';

import Map from '../Map';

import './index.scss'

type Props = {
	season: number,
	round: string,
	raceName: string,
	raceUrl: string,
	circuitName: string,
	circuitUrl: string,
	lat: string,
	long: string,
	locality: string,
	country: string,
	date: string,
	time: string,
};
class VisualItem extends React.Component<Props> {
	getTime = (date, time) => {
		if (date && time) return moment(`${date}T${time}`).format("LLLL");
		else if (!time) return moment(date).format("LL");
	}

	render() {
		const { raceName, raceUrl, round, locality, country, circuitName, circuitUrl, lat, long, date, time } = this.props;
		return (
			<div className="VisualItem">
				<div className="VisualItem-Header">
					<div className="VisualItem-Header-Left">
						<div className="RaceInfo-Secondary">
							<div className="RaceInfo-Secondary-Content">
								<div className="RaceInfo-Secondary-RaceName">{raceName}</div>
								<a className="RaceInfo-Secondary-RaceNameRedirect" href={raceUrl} target="_blank" rel="noopener noreferrer"><RedirectIcon /></a>	
							</div>
						</div>
						<div className="RaceInfo-Tertiary">
							<div className="RaceInfo-Tertiary-Content">
								<div className="RaceInfo-Tertiary-Round">
									ROUND {round}
								</div>
								<div className="Divider"> | </div>
								<div className="RaceInfo-Tertiary-Location">
									<span className="RaceInfo-Tertiary-Location-Locality">{locality}</span>,
									<span className="RaceInfo-Tertiary-Location-Country">{country}</span>
								</div>
							</div>
						</div>
						<div className="RaceInfo-Quarternary">
							<div className="RaceInfo-Tertiary-Temporal">
								{this.getTime(date, time)}
							</div>
						</div>
					</div>
					<div className="VisualItem-Header-Right">

					</div>
				</div>
				<div className="VisualItem-Body">
					<div className="VisualItem-Body-Object">
						<div className="VisualItem-Body-Object-Header"></div>
						<div className="VisualItem-Body-Object-Body">
							<Map lat={lat} long={long} content={circuitName}/>
						</div>
						<div className="VisualItem-Body-Object-Footer">
							<a className="VisualItem-Body-Object-Footer-CircuitName" href={circuitUrl} target="_blank" rel="noopener noreferrer">{circuitName}</a>	
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VisualItem;