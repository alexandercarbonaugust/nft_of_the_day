import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, CardMedia, Card, CardContent, Link } from '@material-ui/core/';
import logo from './nft_of_the_day_logo.png';

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

export default function HomePageLayout() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container className={classes.mainGrid} maxWidth='xl'>

    {/* logo and header material */}
      <Grid style={{textAlign: 'center'}} item xl={12} lg={12} s={12} xs={12}>
        <img src={logo} width='25%'
        height='auto'/>
      </Grid>

    {/* NFTofTheDay image */}
      <Grid style={{textAlign: 'center'}} item xl={12} lg={12} s={12} xs={12}>
        <img
        src="https://lh3.googleusercontent.com/MFBTv5s-kkwNu2PRSJ71mlhDUnn_71FnUDqy6x2np7VcvvpWht-_t757A7bXJIOqWxD2BG9g6RrhTFiHavLLL26ITw=s992"
        width='40%'
        height='auto'
        />
      </Grid>

   {/* text area below img */}
       <Grid item style={{textAlign: 'center'}} item xl={12} lg={12} s={12} xs={12}>
         <div class="card">
           <div class="container">
             <h1><b>Pray</b></h1>
             <h3>Created by FeltZine</h3>
             <a href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/15416" target="_blank">
             Listed on Opensea.io
             </a>
           </div>
         </div>
       </Grid>

  </Container>

  );
}

// export default App;
