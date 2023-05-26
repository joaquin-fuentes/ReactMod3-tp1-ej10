import React from 'react';
import { Card, Button, Form, Col, Row } from "react-bootstrap"

const Pelicula = ({pelicula, borrarPelicula}) => {
    return (
        <Card className='my-2 mx-0 bg-dark border-light'>
            <Card.Header className='d-flex flex-column justify-content-center'>
                    <h5>{pelicula.nombre}</h5>
                    <p>{pelicula.genero}</p>
            </Card.Header>
            <Card.Body className='bg-verde'>
                <p>{pelicula.descripcion}.</p>
            </Card.Body>
            <Card.Footer className='text-end'>
                <Button variant="danger" onClick={()=>borrarPelicula(pelicula.nombre)}>Borrar</Button>
            </Card.Footer>
        </Card>
    );
}

export default Pelicula;