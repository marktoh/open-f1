import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './index.scss'

type Props = {
	lat: string,
	long: string,
	content: string,
	markers: [{
		popup: {
			content: string,
			open: boolean,
		},
		tooltip: {
			content: string,
			permanent: boolean,
		}
	}],
}
class RacingMap extends React.Component<Props> {
	constructor(props) {
		super(props)
		this.state = {
		  lat: this.props.lat,
		  lng: this.props.long,
		  zoom: 12.8
		}
	  }

	  render() {
		const position = [this.state.lat, this.state.lng];
		return (
			<Map center={position} zoom={this.state.zoom}>
				<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				<Marker position={position}>
					<Popup>{this.props.content}</Popup>
				</Marker>
			</Map>
		);
	  }

}

export default RacingMap;