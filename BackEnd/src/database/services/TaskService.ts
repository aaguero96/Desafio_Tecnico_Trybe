import Task from '../models/TaskModel';

export default class TaskService {
  getAll = async () => {
    const tasks = await Task.findAll();
    return tasks;
  };
}
