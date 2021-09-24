import axios from 'axios';

axios.defaults.baseURL =
  'https://mortgage-calculator-project.herokuapp.com/api/';

export const getBanks = ({ currentPage = 1, perPage = 4 }) =>
  axios
    .get(`/banks?page=${currentPage}&limit=${perPage}`)
    .then(responce => responce.data.banks);
