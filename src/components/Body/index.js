import React from 'react';
import axios from 'axios';

import Select from 'react-select';
import VisualItem from '../VisualItem';

import './index.scss';

class Body extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			year: new Date().getFullYear(),
			data: [],
		}

		const options = [];
		for (var i = 1950; i <= this.state.year; i++) {
			options.push({value: i, label: i});
		}
		this.options = options.reverse();
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.year !== this.state.year) {
			axios.get(`http://ergast.com/api/f1/${this.state.year}.json`).then(resp => this.setState({ data: resp.data }));
		}
	}

	componentDidMount = () => {
		axios.get(`http://ergast.com/api/f1/${this.state.year}.json`).then(resp => this.setState({ data: resp.data }));
	}

	onSelect = (e) => {
		this.setState({
			year: e.value,
		})
	}

	renderItems = () => {
		if (this.state.data.length <= 0) return <div className="Body-Placeholder"></div>;
		const { Races } = this.state.data.MRData.RaceTable;

		return Races.map(race =>
			{
				const { season, round, url: raceUrl, raceName, date, time, 
					Circuit: { url: circuitUrl, circuitName, 
						Location: { lat, long, locality, country }
					} 
				} = race;
				return (
						<div className="Body-Body-Row" key={round}>
							<VisualItem 
								season={season}
								round={round}
								raceName={raceName}
								raceUrl={raceUrl}
								circuitName={circuitName}
								circuitUrl={circuitUrl}
								lat={lat}
								long={long}
								locality={locality}
								country={country}
								date={date}
								time={time}
							/>
						</div>
				)
			}
		);
	}

	render() {
		return (
			<div className="Body">
				<div className="Body-Header">
					<div className="Search">
						<div className="Search-Title">Currently showing results for</div>
						<Select className="Search-Dropdown" value={{ label: this.state.year, value: this.state.year }} options={this.options} onChange={this.onSelect} placeholder="Select a year" maxMenuHeight={210} />
					</div>
				</div>
				<div className="Body-Body">
					{this.renderItems()}
				</div>
			</div>
		)
	}
}

export default Body;