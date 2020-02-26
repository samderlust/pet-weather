import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IPet } from '../stores/types';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface IPetTableProps extends RouteComponentProps {
  allPets: IPet[];
}

const _PetTable = (props: IPetTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Breed</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allPets.map(pet => (
            <TableRow key={pet.id.toString()}>
              <TableCell component="th" scope="row">
                {pet.name}
              </TableCell>
              <TableCell align="right">{pet.type}</TableCell>
              <TableCell align="right">{pet.breed}</TableCell>
              <TableCell align="right">{pet.location}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => props.history.push(`/pet/${pet.id}`)}
                >
                  VIEW
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const PetTable = withRouter(_PetTable);
