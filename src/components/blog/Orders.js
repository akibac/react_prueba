import React , { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { fetchPosts } from '../../redux/actions/postActions'
import PubSub from 'pubsub-js'


export default function Orders() {
  // Generate Order Data
  function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }

  const [ users, setUsers ] = useState([])

  useEffect(() => {
    PubSub.subscribe('InitialData', (e, data) => { //recibe los datos para la tabla desde app.js
       const res =  data.map((post) => post) 
       setUsers(res);
    })
  },[])

  function preventDefault(event) {
    event.preventDefault();
  }

  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Title>List Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((data) => 
          <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.username}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.address.city}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.phone}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.email}
              </TableCell>
              <TableCell align="right">{data.website}</TableCell>
          </TableRow>
        )}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
