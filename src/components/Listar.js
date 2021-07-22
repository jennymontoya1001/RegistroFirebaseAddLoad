import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import {eliminarEstudiante} from '../actions/action'

export const Listar = () => {


    const dispatch = useDispatch();

    const { estudiante } = useSelector(store => store.estudiante);
    console.log(estudiante);

    const handleModificar = (id) =>{
        console.log(id);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (estudiante) ?
                            (
                                estudiante.map(element => (

                                    <tr key={element.id}>
                                        <td>{element.id}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.apellido}</td>
                                        <td>{element.telefono}</td>
                                       <td>
                                           <button
                                          >Editar</button>
                                           <button
                                            >Eliminar</button>
                                       </td>
                                       
                                    </tr>
                                )
                                )
                            ) :
                            <p>Datos no disponibles</p>
                    }
                </tbody>
            </Table>
        </div>
    )
}
