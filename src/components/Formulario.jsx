import React from 'react';
import { Button, Col, Form, FloatingLabel, InputGroup, Row } from "react-bootstrap"
import { useState } from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [documento, setDocumento] = useState("")
    const [dato, setDato] = useState({})
    const [datosUsuario, setDatosUsuario] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length !== 0 && apellido.length !== 0 && email.length !== 0 && documento.length !== 0) {
            setDato({ nombre: nombre, apellido: apellido, email: email, documento: documento })
            setDatosUsuario([...datosUsuario, dato]);
            setNombre("");
            setApellido("");
            setEmail("");
            setDocumento("");
            alert("Datos cargados")
        } else {
            alert("no fue posible cargar los datos, por favor complete todos los campos")
        }
    };


    return (
        <section className='border rounded fw-bold'>
            <Form onSubmit={handleSubmit} >
                <header className='border p-3  '>
                    <h4> Dar pelicula de alta</h4>
                </header>
                <Row className=" m-0 p-2 p-md-0">
                    <Form.Group as={Row} className="p-2 mx-0">
                        <Form.Label column sm="2">
                            Nombre:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Ingrese el nombre de la pelicula" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="p-2 mx-0">
                        <Form.Label column sm="2">
                            Descripcion:
                        </Form.Label>
                        <Col sm="10">
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="p-2 mx-0">
                        <Form.Label column sm="2">
                            Género:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Default select example">
                                <option disabled>Seleccione un género</option>
                                <option value="comedia">Comedia</option>
                                <option value="drama">Drama</option>
                                <option value="infantil">Infantil</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                </Row>
                <footer className='border p-3 text-center '>
                    <Button type="submit" className='rounded'>Dar de alta</Button>
                </footer>
            </Form>
        </section>
    );
};

export default Formulario;