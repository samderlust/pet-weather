import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { StoreState } from '../stores/reducers';
import { PetMarker } from './PetMarker';

const G_KEY = process.env.REACT_APP_GOOGLE_API_KEY as string;

interface IPetMapViewProps {}

interface StateProps extends StoreState {}

const _PetMapView = (props: IPetMapViewProps & StateProps) => {
  const {
    petReducer: { allPets }
  } = props;

  return (
    <div
      style={{
        height: 700,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden'
      }}
    >
      <GoogleMapReact
        options={{
          fullscreenControl: false,
          gestureHandling: 'greedy'
        }}
        bootstrapURLKeys={{ key: G_KEY }}
        defaultCenter={{
          lat: 45.2487862,
          lng: -76.3606792
        }}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        {allPets.map(pet => (
          <PetMarker
            lat={pet.latitude}
            lng={pet.longitude}
            key={pet.id}
            pet={pet}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const PetMapView = connect(mapStateToProps, {})(_PetMapView);
