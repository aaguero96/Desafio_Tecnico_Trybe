import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const validatecreatedAt = (req: Request, res: Response, next: NextFunction) => {
  const { createdAt } = req.body;
  if (!createdAt) { return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'CreatedAt is required',
  }); }
  return next();
};

const validateStatus= (req: Request, res: Response, next: NextFunction) => {
  const { status } = req.body;
  if (!status) { return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'Status is required',
  }); }
  const validate = ['pronto', 'em andamento', 'pendente'].includes(status);
  if (!validate) { return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'Status incorrect',
  }); }
  return next();
};

const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { task } = req.body;
  if (!task) { return res.status(StatusCodes.BAD_REQUEST).json({
    message: 'Task is required',
  }); }
  return next();
};

export {
  validateTask,
  validatecreatedAt,
  validateStatus,
};