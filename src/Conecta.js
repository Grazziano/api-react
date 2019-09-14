import axios from 'axios'

const Conecta=axios.create({baseURL: 'https://api-aulas.herokuapp.com/api'})

export default Conecta