import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import { PetAppBar } from '../components/PetAppBar';
import { connect } from 'react-redux';
import { StoreState } from '../stores/reducers';
import { getPetById, getCurrentWeather } from '../stores/actions';
import { useHistory } from 'react-router-dom';

interface IPetScreenProps {
  getPetById: Function;
  getCurrentWeather: Function;
}

interface StateProps extends StoreState {}
const _PetScreen = (props: IPetScreenProps & StateProps) => {
  let { id } = useParams();
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const history = useHistory();

  const {
    petReducer: { currentPet, currentWeather },
    getCurrentWeather,
    getPetById
  } = props;

  const { icon, precipIntensity, precipType } = currentWeather;

  useEffect(() => {
    console.log(id);
    getPetById(id);
  }, [id]);

  useEffect(() => {
    if (currentPet) {
      const { latitude, longitude } = currentPet;
      getCurrentWeather(latitude, longitude);
    }
  }, [currentPet]);

  useEffect(() => {
    getImage();
  }, [currentWeather]);

  const getImage = () => {
    if (icon === 'fog') {
      if (currentPet?.type === 'dog') setImage(require('../img/dogRain.jpg'));
      else setImage(require('../img/catRain.jpg'));
      setAnswer('Yes!');
      setMessage(
        `It looks like ${currentPet?.name} will need an umbrella in ${currentPet?.location}`
      );
    } else {
      if (currentPet?.type === 'dog') setImage(require('../img/dog.jpg'));
      else setImage(require('../img/cat.jpg'));
      setAnswer('No!');
      setMessage(
        `It looks like ${currentPet?.name} won't need an umbrella in ${currentPet?.location}`
      );
    }
  };

  return (
    <Container>
      <PetAppBar />
      {currentPet && (
        <Card>
          <CardHeader title={currentPet?.name} />
          <CardMedia
            component="img"
            style={{
              objectFit: 'cover'
            }}
            height={400}
            image={image}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {answer}
            </Typography>
            <Typography variant="body2">{message}</Typography>
          </CardContent>

          <CardActions>
            <Button
              onClick={() => history.push('/')}
              variant="contained"
              color="primary"
            >
              See other pets
            </Button>
          </CardActions>
        </Card>
      )}
      <div>
        {currentPet === undefined && <h1>Loading....</h1>}
        {currentPet === null && <h1>This Pet is not available</h1>}
      </div>
    </Container>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const PetScreen = connect(mapStateToProps, {
  getPetById,
  getCurrentWeather
})(_PetScreen);
