import React from 'react';
import { Button, Col, Form, FloatingLabel, InputGroup, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import Peliculas from "./Peliculas"

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [genero, setGenero] = useState("")
    let peliculasLocalStorage = JSON.parse(localStorage.getItem("listaPeliculas") || "[]")
    const [peliculas, setPeliculas] = useState(peliculasLocalStorage)



     useEffect(() => {
         localStorage.setItem("listaPeliculas", JSON.stringify(peliculas))
     }, [peliculas])

     const handleSubmit = (e) => {
         e.preventDefault();
         if (nombre.length !== 0 && descripcion.length !== 0 && genero.length !== 0 ) {
             const nuevaPeli = { nombre: nombre, descripcion: descripcion, genero: genero}
             setPeliculas([...peliculas, nuevaPeli]);
             setNombre("");
             setDescripcion("");
             setGenero("");
           
             console.log("dato guardado:", (nuevaPeli));
             alert("Nueva peli cargada")
         } else {
             alert("no fue posible cargar la peli, por favor complete todos los campos")
         }
     };
     const borrarPelicula = (nombre) => {
         let arregloFiltrado = peliculas.filter((pelicula) => pelicula.nombre !== nombre)
         setPeliculas(arregloFiltrado)
     }


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
                            <Form.Control type="text" placeholder="Ingrese el nombre de la pelicula" 
                              onChange={(e) => setNombre(e.target.value)}
                              value={nombre}/>
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
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    value={descripcion}
                                />
                                
                            </FloatingLabel>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="p-2 mx-0">
                        <Form.Label column sm="2">
                            Género:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Default select example"
                              onChange={(e) => setGenero(e.target.value)}
                              value={genero}
                            >
                                <option value="">Seleccione un género</option>
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
            <Peliculas peliculas={peliculas} borrarPelicula={borrarPelicula}></Peliculas>
        </section>
    );
};

export default Formulario;