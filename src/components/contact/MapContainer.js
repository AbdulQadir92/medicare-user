import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
    render() {
        return (
            <div style={mapContainerStyle}>
                <Map
                    google={this.props.google}
                    zoom={16}
                    style={style}
                    initialCenter={{
                        lat: 24.860735,
                        lng: 67.001137
                    }}
                >

                    <Marker onClick={this.onMarkerClick}
                        title={'My Office'}
                        name={'Current location'}
                        position={{
                            lat: 24.860735,
                            lng: 67.001137
                        }} />
                </Map>
            </div>
        );
    }
}

const mapContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '400px'
}

const style = {
    width: '100%',
    height: '100%'
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC8QJ2k8Bc75JiFcAuBtdoU4LSZJV3bmFY')
})(MapContainer)

