import axios from 'axios';
axios.defaults.baseURL = 'https://tests-app-api.herokuapp.com';

const getTheoryTests = async () => {
  try {
    const { data } = await axios.get('/api/tests/qa-practices');
    const tests = data.data.result;
    return tests;
  } catch (error) {
    console.log(error);
  }
};

export default getTheoryTests;