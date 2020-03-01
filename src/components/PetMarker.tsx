import React from 'react';
import { IPet } from '../stores/types';
import { useHistory } from 'react-router-dom';

interface IPetMarkerProps {
  lat: number;
  lng: number;
  pet: IPet;
}

export const PetMarker = ({ pet }: IPetMarkerProps) => {
  const history = useHistory();

  return (
    <div
      style={{
        width: 40,
        height: 40,
        background: '#0097a9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ee5340',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: '50%',
        color: 'white',
        fontSize: '1.5em',
        wordWrap: 'break-word',
        overflow: 'hidden'
      }}
      onClick={() => history.push(`/pet/${pet.id}`)}
    >
      {pet.name}
    </div>
  );
};
