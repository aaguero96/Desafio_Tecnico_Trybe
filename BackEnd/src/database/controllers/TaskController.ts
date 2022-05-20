import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { StatusCodes } from 'http-status-codes';

export default class TaskController {
  private service: TaskService;

  constructor() {
    this.service = new TaskService();
  }

  getAll = async (_req: Request, res: Response) => {
    const tasks = await this.service.getAll();
    return res.status(StatusCodes.OK).json(tasks);
  };

  getByTask =async (req: Request, res: Response) => {
    const { filter } = req.params;
    const tasks = await this.service.getByTask(filter);
    if (!tasks) { return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(); }
    if (tasks.length === 0) { return res.status(StatusCodes.NOT_FOUND).json({
      message: 'This taskName doesnt exist',
    }); }
    return res.status(StatusCodes.OK).json(tasks);
  };

  create = async (req: Request, res: Response) => {
    const { task, createdAt, status } = req.body;
    const newTask = await this.service.create({ task, createdAt, status });
    if (!newTask) { return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(); }
    return res.status(StatusCodes.CREATED).json(newTask);
  };

  update = async (req: Request, res: Response) => {
    const { task, createdAt, status } = req.body;
    const { id } = req.params;
    const newTask = await this.service.update(Number(id), { task, createdAt, status });
    if (!newTask) { return res.status(StatusCodes.NOT_FOUND).json({
      message: 'id didnt found',
    }); }
    return res.status(StatusCodes.OK).json({ message: 'Value was edited' });
  };
}