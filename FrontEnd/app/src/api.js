import axios from 'axios';

const PORT = process.env.REACT_APP_API_PORT || '3002';

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

const tasksData = async () => {
  const { data } = await api.get('/tasks');
  return data;
};

export {
  tasksData,
};