import axios from 'axios'
import {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS, 
    FETCH_TEMPERATURE_FAILURE
} from './Types'

export const fetchTemperatureRequest = () => {
    return {
        type: FETCH_TEMPERATURE_REQUEST
    }
}

export const fetchTemperatureSuccess = temperature => {
    return {
        type: FETCH_TEMPERATURE_SUCCESS,
        payload: temperature
    }
}

export const fetchTemperatureFailure = error => {
    return {
        type: FETCH_TEMPERATURE_FAILURE,
        payload: error
    }
}

export const fetchTemperature = () => {
    return (dispatch) => {
        dispatch(fetchTemperatureRequest())
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?lat=26.9124&lon=75.7873&appid=a4de8ca5eb09bc4f86f9365a0b836570`)
        .then(respose => {
             const temperature = respose.data.main.temp
             dispatch(fetchTemperatureSuccess(temperature))
         })
         .catch(error => {
             const errorMsg = error.message
             dispatch(fetchTemperatureFailure(errorMsg))
         })
    }
}