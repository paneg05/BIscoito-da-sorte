import axios from 'axios'

const api=axios.create({
    baseURL:"https://testefunctionsbeto.azurewebsites.net/api/frases-api"
})

export default api