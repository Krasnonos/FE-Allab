import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '372px',
  height: '218px',
};

export const Map = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDF1e7Wfn3Dgpb3m-Cw5u_f0fisQ8vNKDA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: location.lat, lng: location.long }}
        zoom={10}
      >
        <Marker
          position={{
            lat: location.lat,
            lng: location.long,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
