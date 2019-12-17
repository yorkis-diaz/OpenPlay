import React from 'react';
import MarkerManager from '../../util/marker_manager';

class OpenMap extends React.Component {

    componentDidMount () {
        const mapOptions = {
          center: { lat: this.props.eventLat, lng: this.props.eventLng },
          zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map)
    }

    componentDidUpdate () {
        
    }

    render () {
        return (
            <div ref={ map => this.mapNode = map} id="map-container">
                Map
            </div>
        )
    }
}


export default OpenMap;