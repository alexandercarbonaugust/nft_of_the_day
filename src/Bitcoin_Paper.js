import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, CardMedia, Card, CardContent } from '@material-ui/core/';
import bitcoin_paper from './bitcoin.pdf';

var w = window.innerWidth;
var h = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: h*0.5,
    width: w*0.25,
  },
  card: {
    height: h*0.3,
    width: w*0.25,
    flexWrap: 'wrap'
  },
  mainGrid: {
    // flex: 1,
    direction: 'row',
  },
  logo: {
    flex: 1,
  },
}));


export default function Bitcoin_Paper() {
  const classes = useStyles();

  return (
    <div>
      <Typography>Link to Bitcoin PDF</Typography>
    </div>
  );
}

// export default App;
