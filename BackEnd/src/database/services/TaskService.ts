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

  getByTask = async (filter: string) => {
    try {
      const tasks = await Task.findAll();
      const filteredTasks = tasks.filter(({ task }) => task.toLowerCase().includes(filter.toLowerCase()));
      return filteredTasks;
    } catch (e) {
      console.error(e);
    }
  };
}
