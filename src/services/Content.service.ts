import Axios, { AxiosInstance } from 'axios'
import { Dictionary } from '@/types/Collections.type'

const BASE_URL = 'https://base-url.com'

export default class ContentService {
  private axios: AxiosInstance

    constructor (axiosInstance?: AxiosInstance) {
        this.axios = axiosInstance || Axios.create()
    }

    async getContentFromEndpoint (endpoint: string, params?: Dictionary<string>): Promise<any> {
      try {
        const res = await this.axios.get(`${BASE_URL}/${endpoint}`, { params })
        return res.data
      } catch (error) { throw error }
    }
}