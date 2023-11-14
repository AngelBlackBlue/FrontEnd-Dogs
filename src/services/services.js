import axios from "axios";
import {URL_VERCEL} from './vercel'

export const createDog = async(create) => {
        
         try {       

           await axios.post(`${URL_VERCEL}/dogs`, create);
           return window.alert('Perro creado con exito');

        } catch (error) {

            return window.alert('Error al crear la raza, verifique los datos');       

        }

}

