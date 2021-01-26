import axios from "axios";
import { url } from '../config/end-point'

export async function loginRequest(data){
    const token = localStorage.getItem('id_token')
    const { email, password } = data
    try {
        const response = await axios.post(`${url}login`, {
            correo: email,
            contraseña: password
        }, {  headers: {
            'authorization': `Bearer ${token}`
        }})
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}