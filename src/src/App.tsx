import { Component } from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './components/Header';


class App extends Component {
  render() {
    return(
      <Container maxWidth="sm">
        <Header user={null} />
      </Container>
    );
  }
}

export default App;
