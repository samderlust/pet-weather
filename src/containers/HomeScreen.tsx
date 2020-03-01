import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPets } from '../stores/actions';
import { StoreState } from '../stores/reducers';
import { Container, Typography, ButtonGroup, Button } from '@material-ui/core';
import { PetTable } from '../components/PetTable';
import { PetAppBar } from '../components/PetAppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { PetMapView } from '../components/PetMapView';

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
    },
    buttonGroup: {
      marginBottom: 10
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

  const [mapView, setMapView] = useState<boolean>(true);

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
        <ButtonGroup
          className={classes.buttonGroup}
          color="primary"
          variant="contained"
        >
          <Button
            variant={mapView ? 'contained' : 'outlined'}
            onClick={() => setMapView(true)}
          >
            Map View
          </Button>
          <Button
            variant={!mapView ? 'contained' : 'outlined'}
            onClick={() => setMapView(false)}
          >
            Table View
          </Button>
        </ButtonGroup>
        {mapView && <PetMapView />}
        {!mapView && <PetTable allPets={allPets} />}
      </div>
    </Container>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const HomeScreen = connect(mapStateToProps, { getAllPets })(_HomeScreen);
