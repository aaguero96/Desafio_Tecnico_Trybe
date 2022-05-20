import Task from '../models/TaskModel';

type task = {
  id?: number,
  task: string,
  createdAt: Date,
  status: 'pronto' | 'em andamento' | 'pendente',
};

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

  create = async (newTask: task) => {
    const { task, createdAt, status } = newTask;
    try {
      const result = await Task.create(
        { task, createdAt, status }
      );
      return result;
    } catch (e) {
      console.error(e);
    };
  };
}
