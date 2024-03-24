import axios from 'axios'

const baseUrl='http://localhost:4000/api'


export const getAllBooks=async()=>{

    try {
       const response=await axios.get(`${baseUrl}/books`)
       if(response){
        return response.data
       }
    } catch (error) {
        console.log(error,'error')
    }
}

export const getAllUsers=async()=>{

    try {
       const response=await axios.get(`${baseUrl}/users`)
       if(response){
        return response.data
       }
    } catch (error) {
        console.log(error,'error')
    }
}

export const Checkout=async(payload)=>{

    try {
       const response=await axios.post(`${baseUrl}/users/checkout`,payload)
       if(response){
        return response.data
       }
    } catch (error) {
        console.log(error,'error')
    }
}

export const Return=async(payload)=>{

    try {
       const response=await axios.post(`${baseUrl}/users/return`,payload)
       if(response){
        return response.data
       }
    } catch (error) {
        console.log(error,'error')
    }
}


export const FineStatus=async(payload)=>{

    try {
       const response=await axios.post(`${baseUrl}/users/checkFine`,payload)
       if(response){
        return response.data
       }
    } catch (error) {
        console.log(error,'error')
    }
}
