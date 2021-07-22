import { Form, Button} from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import {registroEstudiante,listarEstudiante} from '../actions/action'
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Listar} from '../components/Listar';

export const Estudiante = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange,reset] = useForm({
        id: '',
        nombre: '',
        apellido: '',
        telefono: ''
    });

    const { id, nombre, apellido, telefono } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(id, nombre,apellido,telefono);
        dispatch(registroEstudiante(id, nombre,apellido,telefono));
        reset();
    }

    useEffect(() => {
        dispatch(listarEstudiante());
    }, [])
 
  

    return (
        <div>
            <Form onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Id"
                        name="id"
                        value={id}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>
 
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="apellido"
                        name="apellido"
                        value={apellido}
                        onChange={handleInputChange}
                    />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="telefono"
                        name="telefono"
                        value={telefono}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>

            <Listar />

        </div>
    )
}
