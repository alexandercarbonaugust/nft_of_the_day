import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, CardMedia, Card, CardContent, Link } from '@material-ui/core/';

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
    height: 500,
    width: 500
  },
  card: {
    height: 200,
    width: 500,
    flexWrap: 'wrap'
  }
}));

export default function App() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container>

    {/* logo and header material */}
      <Grid container direction="column" alignItems="center" justify="center" spacing={10}>
        <Grid item xs={12} styles={{justifyContent: 'center', alignItems: 'center'}}>
          <Typography variant='h3'>NFTofTheDay</Typography>
        </Grid>
      </Grid>

   {/* NFTofTheDay image */}
       <Grid container direction="column" alignItems="center" justify="center" spacing={10}>
         <Grid item xs={6} styles={{justifyContent: 'center', alignItems: 'center'}}>
           <CardMedia
              component='img'
              className={classes.media}
              src="https://lh3.googleusercontent.com/MFBTv5s-kkwNu2PRSJ71mlhDUnn_71FnUDqy6x2np7VcvvpWht-_t757A7bXJIOqWxD2BG9g6RrhTFiHavLLL26ITw=s992"
              title="Pray"
            />
         </Grid>
       </Grid>

   {/* text area below img */}
       <Grid container direction="column" alignItems="center" justify="center" spacing={10}>
         <Grid item xs={6} styles={{justifyContent: 'center', alignItems: 'center'}}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h3'>
                Pray
              </Typography>
              <Typography variant='h6'>
                Created by FeltZine
              </Typography>
              <Typography>
                5.15 ETH
              </Typography>
              <a href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/15416" target="_blank">
              Listed on Opensea.io
              </a>
            </CardContent>
          </Card>
         </Grid>
       </Grid>

    </Container>
  );
}

// export default App;
