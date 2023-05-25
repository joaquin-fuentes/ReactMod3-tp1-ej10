import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pelicula from './Pelicula';

const Peliculas = () => {
    return (
        <section className='mx-0'>
            <header className='text-center p-3 border my-3'>
                <h4>Listado de peliculas</h4>
            </header>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={6}>
                        <Pelicula></Pelicula>
                    </Col>
                    <Col sm={6}>
                        <Pelicula></Pelicula>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Peliculas;