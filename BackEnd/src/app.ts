import * as express from 'express';
import TaskController from './database/controllers/TaskController';

class App {
  public app: express.Express;

  private taskController: TaskController;

  constructor() {
    this.app = express();
    this.config();
    this.taskController = new TaskController();

    this.app.get(
      '/tasks/:filter',
      this.taskController.getByTask,
    );

    this.app.get(
      '/tasks',
      this.taskController.getAll,
    );
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  };

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Run on ${PORT}`));
  }
}

export { App };

export const { app } = new App();