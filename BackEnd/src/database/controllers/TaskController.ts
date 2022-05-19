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
  }
}