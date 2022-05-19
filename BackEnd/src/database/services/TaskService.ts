import Task from '../models/TaskModel';

export default class TaskService {
  getAll = async () => {
    try {
      const tasks = await Task.findAll();
      return tasks;
    } catch (e) {
      console.error(e);
    }
  };
}
