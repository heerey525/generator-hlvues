import HttpRequest from '@/utils/axios'

const baseUrl = process.env.VUE_APP_BASEURL
const axios = new HttpRequest(baseUrl)
export default axios
