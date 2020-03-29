import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';

type Props = {
	lat: number,
	long: number,
	popup: {
		content: string,
		open: boolean,
	},
	tooltip: {
		content: string,
		permanent: boolean,
	},
}
class LeafletMarker extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.markerRef = React.createRef();
	}
	
	componentDidUpdate = () => {
		if (this.props.popup.open) {
			setTimeout(() =>
				this.markerRef.current.leafletElement.openPopup()
			, 250);
		}
	}

	componentDidMount = () => {
		if (this.props.popup && (this.props.popup.open)) this.markerRef.current.leafletElement.openPopup();
	}

	render() {
		const { lat, long, popup, tooltip } = this.props;
		return (
			<Marker ref={this.markerRef} position={[lat, long]}>
				{popup && popup.content && <Popup>{popup.content}</Popup>}
				{tooltip && tooltip.content && <Tooltip permanent={tooltip.permanent}>{tooltip.content}</Tooltip>}
			</Marker>
		)
	}
}

export default LeafletMarker;