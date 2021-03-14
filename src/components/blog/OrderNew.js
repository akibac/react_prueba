import React , { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { fetchPosts } from '../../redux/actions/postActions'
import PubSub from 'pubsub-js';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

export default function OrderNew() {

	function preventDefault(event) {
		event.preventDefault();
	}
	const useStyles = makeStyles((theme) => ({
		root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
		},
	}));

	const classes = useStyles();

	return(
		<form className={classes.root} noValidate autoComplete="off">
	      <TextField id="standard-basic" label="Standard" />
	      <TextField id="filled-basic" label="Filled" variant="filled" />
	      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
	      <Button
	        variant="contained"
	        color="secondary"
	        className={classes.button}
	        startIcon={<DeleteIcon />}
	      >
	        Cancelar
	      </Button>
	      <Button
	        variant="contained"
	        color="primary"
	        size="small"
	        className={classes.button}
	        startIcon={<SaveIcon />}
	      >
	      Guardar
	      </Button>
	    </form>
	)
}