import React from 'react';
import { Card, Button, Form, Col, Row } from "react-bootstrap"

const Pelicula = () => {
    return (
        <Card className='my-2 mx-0 bg-dark border-light'>
            <Card.Header className='d-flex flex-column justify-content-center'>
                    <h5>Guardianes de la Galaxia vol.3</h5>
                    <p>Ciencia Ficcion</p>
            </Card.Header>
            <Card.Body className='bg-verde'>
                <p>Descripcion de la pelicula Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Doloremque ab esse, ipsa quaerat maxime error.
                     Error expedita earum dicta veniam.</p>
            </Card.Body>
            <Card.Footer className='text-end'>
                <Button variant="danger">Borrar</Button>
            </Card.Footer>
        </Card>
    );
}

export default Pelicula;