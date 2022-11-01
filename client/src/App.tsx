import { Component } from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { Announcements } from './components/Announcements';


class App extends Component {
  render() {
    return(
      <Container >
        <Header />
        <Announcements />
      </Container>
    );
  }
}

export default App;
