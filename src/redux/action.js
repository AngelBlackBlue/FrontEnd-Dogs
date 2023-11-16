import { ADD_DOGS, SEARCH_DOGS, ORDER_DOGS, FILTER_DOGS_TEMP, TEMPERAMENT, ORIGEN, WEIGHT_DOG, DETAIL_DOG, CLEAR_DETAIL} from "./action-type";
import axios from 'axios'
import {URL_VERCEL} from '../services/vercel'

export const addDogs = (req, res) => {

    return async (dispatch) => {

        try {

            const response = await axios.get(`${URL_VERCEL}/dogs`);
            const breedData = response.data;

            return dispatch({
                type: ADD_DOGS,
                payload: breedData,
            });

        } catch (error) {

            return res.status(500).send(error)

        }
    }

};


export const searchDogs = (name) => {
    
    return async (dispatch) => {

        try {

            const response = await axios.get(`${URL_VERCEL}/name?name=${name}`);
            const nameData = response.data;
            return dispatch({
                type: SEARCH_DOGS,
                payload: nameData,
            });

        } catch (error) {

            return window.alert('Raza no encontrada o raza incorrecta')

        }
    }

};

export const tempDogs = () => {
    return async (dispatch) => {
        try {

            const response = await axios.get(`${URL_VERCEL}/temperament`);
            const tempData = response.data;
            return dispatch ({
                type: TEMPERAMENT,
                payload : tempData,
            })
            
        } catch (error) {

            return window.alert('Error al cargar los temperamnetos')
            
        }

    }
}

export const detailDog = ( id ) => {
    return  async (dispatch)=>{
        try {
            const response = await axios.get(`${URL_VERCEL}/dogs/${id}`)
            const detail = response.data;
            return dispatch({
                type: DETAIL_DOG,
                payload: detail,
            })
        } catch (error) {

            return window.alert('Error id inexistente')
            
        }
    }
}


export const filterDogsTemp = (filter) => { return { type: FILTER_DOGS_TEMP, payload: filter}};
export const filterDogsTempOrigen = (origen) => { return { type: ORIGEN, payload: origen}};
export const orderDogs = (order) => {return {type: ORDER_DOGS, payload: order}};
export const orderWeight = (weight) => { return { type: WEIGHT_DOG, payload: weight }};
export const clearDetail = () => { return { type: CLEAR_DETAIL, payload: {} }};







