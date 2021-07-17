import axios from 'axios';

export const getResultPracticeTests = async body => {
  try {
    const { data } = await axios.post('/api/tests/qa-practices', body);
    const result = data.data.feedback;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getResultTheoryTests = async body => {
  try {
    const { data } = await axios.post('/api/tests/qa-theories', body);
    const result = data.data.feedback;
    return result;
  } catch (error) {
    console.log(error);
  }
};
