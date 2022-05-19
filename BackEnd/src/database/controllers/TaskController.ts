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
}