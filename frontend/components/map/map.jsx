import React from 'react';

class OpenMap extends React.Component {

    componentDidMount () {
        const mapOptions = {
          center: { lat: 40.760746, lng: -73.983324 },
          zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render () {
        <div ref={ map => this.mapNode = map} id="map-container">
        </div>
    }
}


export default OpenMap;