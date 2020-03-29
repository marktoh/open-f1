import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import LeafletMarker from './LeafletMarker'

import './index.scss'

type Props = {
	lat: string,
	long: string,
	zoom: number,
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
	  isMapCenterDefined = () => this.props.lat && this.props.long;

	  getCenter = () => { 
		  return this.isMapCenterDefined() ? [this.props.lat, this.props.long] : null;
	  }

	  getBounds = () => {
		if (!this.props.markers || this.isMapCenterDefined()) return null;
		const Leaflet = window.L;
		const markerPositions = this.props.markers && this.props.markers.map(marker => [marker.lat, marker.long]);
		const bounds = Leaflet.latLngBounds(markerPositions);
		return bounds;
	  }

	  renderMarkers = () =>
		  this.props.markers && this.props.markers.map((marker, i) => <LeafletMarker key={i} {...marker}/>)

	  render() {
		return (
			<Map center={this.getCenter()} zoom={this.props.zoom}>
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