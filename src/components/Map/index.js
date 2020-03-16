import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import LeafletMarker from './LeafletMarker'

import './index.scss'

type Props = {
	lat: string,
	long: string,
	markers: [{
		lat: number,
		long: number,
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
		  zoom: 6,
		}
	  }

	  getBounds = () => {
		if (!this.props.markers) return null;
		const Leaflet = window.L;
		const markerPositions = this.props.markers && this.props.markers.map(marker => [marker.lat, marker.long]);
		const bounds = Leaflet.latLngBounds(markerPositions);
		return bounds;
	  }

	  renderMarkers = () =>
		  this.props.markers && this.props.markers.map((marker, i) => <LeafletMarker key={i} {...marker}/>)

	  render() {
		const position = [this.state.lat, this.state.lng];
		return (
			<Map center={position} zoom={this.state.zoom} bounds={this.getBounds()}>
				<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
				/>
				{this.renderMarkers()}
			</Map>
		);
	  }

}

export default RacingMap;