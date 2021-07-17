import axios from 'axios';

export const getPracticeTests = async () => {
  try {
    const { data } = await axios.get('/api/tests/qa-practices');
    const tests = data.data.result;
    return tests;
  } catch (error) {
    console.log(error);
  }
};

export const getTheoryTests = async () => {
  try {
    const { data } = await axios.get('/api/tests/qa-theories');
    const tests = data.data.result;
    return tests;
  } catch (error) {
    console.log(error);
  }
};
