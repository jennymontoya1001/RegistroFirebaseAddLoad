import {types} from '../types/types';
import {firebase,db} from '../firebase/firebaseConfig';
import { Estudiante } from '../components/Estudiante';

//Primera función asíncrona
export const  registroEstudiante= (id,nombre,apellido,telefono) => {
    return async (dispatch) => {

         const newEstudiante = {
             id: id,
             nombre: nombre,
             apellido: apellido,
             telefono: telefono
         }

        const respuesta = await db.collection(`/Estudiante`).add(newEstudiante);
        console.log(respuesta)
       
        dispatch(registro(id,nombre,apellido,telefono))
      
    }
}

//FUNCIÓN SINCRÓNICA registro
export const registro = (id,nombre,apellido,telefono) => {
      return{
          type: types.Registrar,
          payload:{
              id,
              nombre,
              apellido,
              telefono
          }
      }
}

//Listar Función asincrónica
export const listarEstudiante = () => {

    return async (dispatch) => {
        const data = await db.collection(`/Estudiante`).get()
        const estudiante = [];
    
        data.forEach(est=>{
           estudiante.push({
            ...est.data()
           })
        })
       
        console.log(estudiante)
        dispatch(listar(estudiante));
    }
}

//Listar función sincrónica
export const listar = (estudiantes) => {
    return {
        type: types.Listar,
        payload: estudiantes
    }
}



//Editar función asincrónica
export const editarEstudiante = (id,estudiantes) => {

    return async (dispatch) => {
     
        const est = estudiantes.find(e => e.id === id);
      
    }
}

//Función Sincrónica

export const eliminar = (id) => ({
    type: types.Eliminar,
    payload: id
})


/* //Eliminar
export const eliminarEstudiante = (id) => {
    return async (dispatch) => {


        await db.collection.doc(`/Estudiante/${id}`).delete();
        
        dispatch(eliminar(id));
        
    }
}

export const eliminar = (id) => ({
    type: types.Eliminar,
    payload: id
}); */
