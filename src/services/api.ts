import axios from 'axios'
import { BASE_URL } from '../utils'

const API =  {
    fetchInitialData: async function () {
        const response = await axios.request({
            baseURL: BASE_URL,
            url: '/content/?page=1&limit=10',
            method: 'GET'
        }) 

        return response
    },

    fetchMoreData: async function (page: number, limit: number = 10){
        const response = await axios.request({
            baseURL: BASE_URL,
            url: `/content/?page=${page}&limit=${limit}`,
            method: 'GET'
        })

        return response
    }
}

export default API
