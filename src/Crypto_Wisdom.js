import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, CardMedia, Card, CardContent } from '@material-ui/core/';
import logo from './nft_of_the_day_logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

export default function Crypto_Wisdom() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography color='white'>NFT Wisdom</Typography>
  );
}

// export default App;
