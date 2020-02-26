import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { PetAppBar } from '../components/PetAppBar';
export const PetScreen = () => {
  let { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <Container>
      <PetAppBar />
      <div>
        <h1>{`PET ID ${id}`}</h1>
      </div>
    </Container>
  );
};
