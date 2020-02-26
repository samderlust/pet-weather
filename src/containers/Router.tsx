import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';
import { PetScreen } from './PetScreen';
import { CreatePet } from './CreatePet';
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/create" component={CreatePet} />
        <Route exact path="/pet/:id" component={PetScreen} />
      </Switch>
    </BrowserRouter>
  );
};
