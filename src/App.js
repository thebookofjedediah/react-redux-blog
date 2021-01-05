import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography, Button } from '@material-ui/core'
import Routes from './Routes';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cfd8dc',
    margin: '50px 0',
    padding: '30px 20px'
  },
  links: {
    margin: '10px 0'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="md">
        <Paper className={classes.root} elevation={3} mt={5}>
          <Typography variant="h2" component="h1">Microblog</Typography>
          <Typography variant="subtitle1" component="p">Get in the Springboard of blogging!</Typography>
          <Button className={classes.links} color="primary">Blog</Button>
          <Button className={classes.links} color="primary">Add a Post</Button>
        </Paper>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
