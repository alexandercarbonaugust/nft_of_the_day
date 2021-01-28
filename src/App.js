import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import HomePageLayout from './HomePageLayout.js';

var w = window.innerWidth;
var h = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <HomePageLayout />
    </div>
  );
}

// export default App;
