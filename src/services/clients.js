import axios from "axios";
import { url } from '../config/end-point'

export async function getClientsRequest(){
    try {
        const token = localStorage.getItem('id_token')
        const response = await axios.get(`${url}get-clients`, {  headers: {
            'authorization': `Bearer ${token}`
        }})
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}

export async function addClient(data){
    const token = localStorage.getItem('id_token')
    const { nombre, razon_social, calle, numero, colonia, estado, codigo_postal, email } = data
    try {
        const response = await axios.post(`${url}add-client`, {
            "nombre": nombre,
            "razon_social": razon_social,
            "calle": calle,
            "numero": numero,
            "colonia": colonia,
            "estado": estado,
            "codigo_postal": codigo_postal,
            "email": email
        },
        {  headers: {
            'authorization': `Bearer ${token}`
            }
        })
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}