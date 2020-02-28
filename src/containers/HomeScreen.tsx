import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPets } from '../stores/actions';
import { StoreState } from '../stores/reducers';
import { Container, Typography } from '@material-ui/core';
import { PetTable } from '../components/PetTable';
import { PetAppBar } from '../components/PetAppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: '#fff',
      alignItems: 'center'
    },
    header: {
      textAlign: 'center'
    }
  })
);

interface IHomeScreenProps {
  getAllPets: Function;
}

interface StateProps extends StoreState {}

const _HomeScreen = (props: IHomeScreenProps & StateProps) => {
  const {
    petReducer: { allPets }
  } = props;
  const classes = useStyles();

  useEffect(() => {
    console.log(`home screen`);
    props.getAllPets();
  }, []);
  return (
    <Container>
      <PetAppBar />
      <div className={classes.container}>
        <Typography className={classes.header} variant="h3">
          Does my Pet need an Umbrella?
        </Typography>
        {/* <PetMapView /> */}
        <PetTable allPets={allPets} />
      </div>
    </Container>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const HomeScreen = connect(mapStateToProps, { getAllPets })(_HomeScreen);
