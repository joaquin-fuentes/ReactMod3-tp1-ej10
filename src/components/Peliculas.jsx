import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pelicula from './Pelicula';

const Peliculas = ({peliculas, borrarPelicula}) => {
    return (
        <section className='mx-0'>
            <header className='text-center p-3 border my-3'>
                <h4>Listado de peliculas</h4>
            </header>
            <Container>
                <Row className='d-flex justify-content-center'>
                {peliculas.map((pelicula, indice)=>{
                        return  <Col key={indice} sm={6}>
                                    <Pelicula borrarPelicula={borrarPelicula}  pelicula={pelicula}></Pelicula>
                                </Col>
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Peliculas;