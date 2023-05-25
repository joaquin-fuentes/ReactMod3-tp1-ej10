import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from "react-bootstrap"
import "./App.css"
import Formulario from './components/Formulario';
import Peliculas from './components/Peliculas';

const App = () => {
  return (
    <>
        <Header></Header>
        <Container className='mainPage'>
          <Formulario></Formulario>
          <Peliculas></Peliculas>
        </Container>
        <Footer></Footer>
    </>
  );
};

export default App;