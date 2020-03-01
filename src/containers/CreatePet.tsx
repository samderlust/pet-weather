import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createNewPet, setErrorMessage } from '../stores/actions';
import { StoreState } from '../stores/reducers';
import { dogBreeds, catBreeds } from '../constrains';
import { RouteComponentProps } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { PetAppBar } from '../components/PetAppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: '#fff',
      alignItems: 'center'
    },
    input: {
      width: 400,
      marginTop: 10,
      marginBottom: 10
    },
    label: {
      background: 'white'
    }
  })
);

enum petTypes {
  dog = 'dog',
  cat = 'cat'
}

interface ICreatePetProps {
  createNewPet: Function;
  setErrorMessage: Function;
}
interface StateProps extends StoreState {}

const _CreatePet = (props: ICreatePetProps & StateProps) => {
  const classes = useStyles();
  const [petType, setPetType] = useState<petTypes>(petTypes.dog);
  const [petBreed, setPetBreed] = useState<string>(dogBreeds[0]);
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [errorField, setErrorField] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const history = useHistory();

  const {
    petReducer: { error, isCreating }
  } = props;

  const handleChooosePetTypes = (
    evt: React.ChangeEvent<{ value: unknown }>
  ) => {
    if (evt.target.value === 'dog') setPetType(petTypes.dog);
    else if (evt.target.value === 'cat') setPetType(petTypes.cat);
  };

  useEffect(() => {
    if (petType === petTypes.dog) setPetBreed(dogBreeds[0]);
    else if (petType === petTypes.cat) setPetBreed(catBreeds[0]);
  }, [petType]);

  const handleChangePetType = () => {
    if (petType === petTypes.dog) return renderBreedChoices(dogBreeds);
    else if (petType === petTypes.cat) return renderBreedChoices(catBreeds);
  };

  const renderBreedChoices = (choices: string[]) =>
    choices.map((choice: string) => (
      <MenuItem key={choice} value={choice}>
        {choice}
      </MenuItem>
    ));

  const validateField = (): boolean => {
    const regexp = /^[+-]?\d*\.\d*$/;

    props.setErrorMessage('');
    setErrorField('');
    setErrorText('');
    if (name === '') {
      setErrorField('name');
      setErrorText(`name can't be empty`);
      return false;
    } else if (location === '') {
      setErrorField('location');
      setErrorText(`location can't be empty`);
      return false;
    } else if (latitude === '') {
      setErrorField('latitude');
      setErrorText(`latitude can't be empty`);
      return false;
    } else if (isNaN(parseFloat(latitude))) {
      setErrorField('latitude');
      setErrorText(`latitude must be a number`);
      return false;
    } else if (parseFloat(latitude) < -90 || parseFloat(latitude) > 90) {
      setErrorField('latitude');
      setErrorText(`latitude value invalid`);
      return false;
    } else if (!regexp.test(latitude)) {
      setErrorField('latitude');
      setErrorText(`latitude can only contain decimal number`);
      return false;
    } else if (longitude === '') {
      setErrorField('longitude');
      setErrorText(`longitude can't be empty`);
      return false;
    } else if (isNaN(parseFloat(longitude))) {
      setErrorField('longitude');
      setErrorText(`longitude must be a number`);
      return false;
    } else if (parseFloat(longitude) < -180 || parseFloat(longitude) > 180) {
      setErrorField('longitude');
      setErrorText(`longitude value invalide`);
      return false;
    } else if (!regexp.test(longitude)) {
      setErrorField('longitude');
      setErrorText(`longitude can only contain decimal number`);
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validateField()) return;
    const newPet = {
      name,
      type: petType,
      breed: petBreed,
      location,
      latitude,
      longitude
    };
    await props.createNewPet(newPet, history);
  };

  return (
    <Container>
      <PetAppBar />
      <div className={classes.container}>
        <Typography variant="h3">Add New Pet</Typography>
        <TextField
          error={errorField === 'name'}
          helperText={errorField === 'name' && errorText}
          variant="outlined"
          className={classes.input}
          label="Name"
          placeholder="milu"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <FormControl className={classes.input} variant="outlined">
          <InputLabel className={classes.label} id="petType-id">
            Type
          </InputLabel>
          <Select
            labelId="petType-id"
            id="demo-simple-select"
            value={petType}
            onChange={evt => handleChooosePetTypes(evt)}
          >
            <MenuItem value={petTypes.dog}>Dog</MenuItem>
            <MenuItem value={petTypes.cat}>Cat</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.input}>
          <InputLabel className={classes.label} id="petBreed-id">
            Breeds
          </InputLabel>
          <Select
            labelId="petBreed-id"
            id="demo-simple-select"
            value={petBreed}
            onChange={evt => setPetBreed(evt.target.value as string)}
          >
            {handleChangePetType()}
          </Select>
        </FormControl>
        <TextField
          error={errorField === 'location'}
          helperText={errorField === 'location' && errorText}
          variant="outlined"
          className={classes.input}
          label="Location"
          placeholder="Ottawa"
          value={location}
          onChange={evt => setLocation(evt.target.value)}
        />
        <TextField
          error={errorField === 'latitude'}
          helperText={errorField === 'latitude' && errorText}
          variant="outlined"
          className={classes.input}
          label="Latitude"
          placeholder="45.2487862"
          value={latitude}
          onChange={evt => setLatitude(evt.target.value)}
        />
        <TextField
          error={errorField === 'longitude'}
          helperText={errorField === 'longitude' && errorText}
          variant="outlined"
          className={classes.input}
          label="Longitude"
          placeholder="-76.3606792"
          value={longitude}
          onChange={evt => setLongitude(evt.target.value)}
        />
        <Typography style={{ color: 'red' }}>{error}</Typography>
        <Button
          disabled={isCreating}
          className={classes.input}
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Create
        </Button>
      </div>
    </Container>
  );
};
const mapStateToProps = (state: StoreState): StateProps => state;

export const CreatePet = connect(mapStateToProps, {
  setErrorMessage,
  createNewPet
})(_CreatePet);
