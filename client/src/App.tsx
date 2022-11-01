import { Component } from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import { Header } from './components/Header';
import { Announcements } from './components/Announcements';
import Product from './components/Product';


class App extends Component {
  render() {
    return(
      <Container >
        <Header />
        <Announcements />
        <Box>
          <Product></Product>
        </Box>
      </Container>
    );
  }
}

export default App;
