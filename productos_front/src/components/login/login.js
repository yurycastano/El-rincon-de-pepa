import React from "react";
import axios from 'axios';
import { Container,Form,Button,Row,Col } from "react-bootstrap";
//import {APIHOST as host} from '../../app.json';
import './login.css';
export default class login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        usuario: '',
        pass: '',
    };
}
iniciarSesion(){
    axios.post(`http://localhost:3001/usuarios/login`,{
        usuario: this.setState.usuario,
        pass: this.state.pass,
    })
    .then((response) =>{
        console.log(response);
    })

    .catch((err) =>{
        console.log(err);
    });
    alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);
}

render() {
    return (
    <Container id="Login-container" >
        <Row>
            <Col>
                <Row>
                    <h2>Iniciar Sesión</h2>
                </Row>
                <Row>
                    <Col
                    sm="12"
                    xs="12"
                    md={{span:4,offset:4}}
                    Lg={{span:4,offset:4}}
                    xl={{span:4,offset:4}}
                    >
                        <Form>
                            <Form.Group>
                                <Form.Label >Usuario</Form.Label>
                                <Form.Control
                                onChange={(e) =>
                                    this.setState({ usuario: e.target.value})
                                }
                                />
                                {
                                
                                }
                            </Form.Group>

                            <Form.Group >
                                <Form.Label >Contraseña</Form.Label>
                                <Form.Control type="password" 
                                onChange={(e) =>
                                    this.setState({pass:e.target.value})
                                }
                                />
                                
                            </Form.Group>
            
                            <Button variant="primary" 
                            onClick={() =>{
                                this.iniciarSesion();
                            }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Col>
            
        </Row>
        
    </Container>
    );}
}
