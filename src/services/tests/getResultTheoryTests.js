import axios from 'axios';
axios.defaults.baseURL = 'https://tests-app-api.herokuapp.com';

const getResultTheoryTests = async (body) => {
  try {
    const { data } = await axios.post('/api/tests/qa-theories', body);   
    const result = data.data.feedback;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getResultTheoryTests;