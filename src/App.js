import './App.css';
import { Container, Paper, Typography, Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Paper elevation={3} mt={5}>
          <Typography variant="h2" component="h1">Microblog</Typography>
          <Typography variant="subtitle1" component="p">Get in the Springboard of blogging!</Typography>
          <Button color="primary">Blog</Button>
          <Button color="primary">Add a Post</Button>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
