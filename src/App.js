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
import HomePageLayout from './HomePageLayout.js';
import Crypto_Wisdom from './Crypto_Wisdom.js';
import Bitcoin_Paper from './Bitcoin_Paper.js';

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
    backgroundColor: 'blue',
  },
  logo: {
    flex: 1,
  },
}));


export default function App() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Router>
    <Container className={classes.mainGrid} maxWidth='xl'>
    {/* logo and header material */}
      <Grid style={{textAlign: 'center'}} item xl={12} lg={12} s={12} xs={12}>
        <Link to="/">
          <img src={logo} width='80%' class='logo' />
        </Link>
      </Grid>

      <Grid item>
        <Link to="/crypto_wisdom" className="link">
          <Typography>NFT Wisdom</Typography>
        </Link>
      </Grid>


      <Switch>
        <Route exact path="/" component={HomePageLayout} />
        <Route path="/crypto_wisdom" component={Crypto_Wisdom} />
      </Switch>

    </Container>
    </Router>
  );
}

// export default App;
