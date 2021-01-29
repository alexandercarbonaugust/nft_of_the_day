import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, CardMedia, Card, CardContent } from '@material-ui/core/';
import logo from './nft_of_the_day_logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Crypto_Wisdom from './Crypto_Wisdom.js';
import Bitcoin_Paper from './Bitcoin_Paper.js';
import HomePageLayout from './HomePageLayout.js'

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

export default function Main_Router() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (

        <Grid style={{textAlign: 'center'}} item xl={12} lg={12} s={12} xs={12}>
          <Grid item>

          <Router>
            <div>

              <Link to="/bitcoin_paper">Bitcoin Paper</Link>

              <Link to="/crypto_wisdom">Crypto Wisdom</Link>

              <Switch>
                <Route path="/bitcoin_paper">
                  <Bitcoin_Paper />
                </Route>
                <Route path="/crypto_wisdom">
                  <Crypto_Wisdom />
                </Route>
              </Switch>
            </div>
          </Router>

          </Grid>

        </Grid>

  );
}

// export default App;
