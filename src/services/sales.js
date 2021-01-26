import axios from "axios";
import { url } from '../config/end-point'

export async function getSalesRequest(){
    try {
        const token = localStorage.getItem('id_token')
        const response = await axios.get(`${url}get-sales`, {  headers: {
            'authorization': `Bearer ${token}`
        }})
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}

export async function makeSale(data){
    const token = localStorage.getItem('id_token')
    try {
        const response = await axios.post(`${url}sale`, data,
        {  headers: {
            'authorization': `Bearer ${token}`
            }
        })
        return response.data
        
    } catch(error) {
        return  error.response.data
    } 
}