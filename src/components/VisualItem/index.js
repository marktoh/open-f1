import React from 'react';
import { isBrowser } from 'react-device-detect';
import { FaExternalLinkAlt as RedirectIcon} from 'react-icons/fa'

import { getFormattedTime } from '../../utils/time'

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
								{getFormattedTime(date, time)}
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
							<Map lat={lat} long={long} markers={
								[
									{ 
										lat,
										long, 
										popup: { content: <div>
											<div style={{ fontVariant: 'all-petite-caps', fontSize: 12, color: '#4e5a5f', textDecoration: 'underline' }}>Round {round}</div>
											<div style={{ fontVariant: 'all-petite-caps', fontSize: 18, color: '#4e5a5f', fontWeight: 600, letterSpacing: 1, padding: 10 }}>{raceName}</div>
											<div style={{ fontSize: 12, color: '#4e5a5f', textAlign: "right"}}>{circuitName}</div>
											<div style={{ fontSize: 10, color: '#4e5a5f', textAlign: "right"}}>{locality}, {country}</div>
											<div style={{ fontSize: 10, color: '#4e5a5f', textAlign: "right"}}>{getFormattedTime(date, time)}</div>
											</div>, 
											autoOpen: isBrowser,
										} 
									}
								]
							  } 
							/>
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