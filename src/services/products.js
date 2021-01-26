import axios from "axios";
import { url } from '../config/end-point'

export async function getProductsRequest(){
    try {
        const token = localStorage.getItem('id_token')
        const response = await axios.get(`${url}get-products`, {  headers: {
            'authorization': `Bearer ${token}`
        }})
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}