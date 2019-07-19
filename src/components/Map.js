import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '400px',
    marginTop: '0px'
  };

const StylesButton = {
    marginTop: '30px'
}
export class MapContainer extends Component {
    constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: -1.2884,
				lng: 36.8233
			},
			markerPosition: {
				lat: -1.2884,
				lng: 36.8233
			}
		}
    }
    onMarkerClick = () => {
        alert('masuk')
    }

    getCurentLocation = () => {
        // alert('masuk')
        var api = ''
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
            // this.setState({...this.state.mapPosition , lat : position.coords.latitude, lng: position.coords.longitude}
// , ()=>{
//               console.log(this.state.mapPosition.lat)
//             }
            // )
            // )
            var mappositions={}
             mappositions.lat=position.coords.latitude
            mappositions.lng=position.coords.longitude
            this.setState({mapPosition: mappositions})
            var markerpos ={}
            markerpos.lat = position.coords.latitude
            markerpos.lng=position.coords.longitude
            this.setState({markerPosition: markerpos})
            // alert(api)
          }); 
    }
  render() {
    
    return (
        <center>
            <div>
                <button type="button"  onClick={this.getCurentLocation} style={StylesButton}>GET CURRENT LOCATION</button>
            </div>
            <div>
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            center={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
            }}
            >
            <Marker
                onClick={this.onMarkerClick}
                draggable={true}
                position={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
             />
            </Map>
            </div>
            
           
         </center>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmmrCkXjXCP1Z4L26o2VWTE8L1wnWSFek'
})(MapContainer);