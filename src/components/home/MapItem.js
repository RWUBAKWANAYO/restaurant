import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '95vh',
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
      };
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
        <div>
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.9331041000000002, lng: 30.078066699999997
          }
        }
        
      >
      <Marker
          onClick={this.onMarkerClick}
          name={<div className="logo-container3">
          <i class="fas fa-fan"></i>
          <div className="logo-wrapper3">
              <h1>NAYO</h1>
              <p id="logo-par1"> RWANDAN RESTAURANT</p>
          </div>
          </div>}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
        
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC70GniVfVaxEnU6tYc9GNNu6HQOignAOo'
})(MapContainer);