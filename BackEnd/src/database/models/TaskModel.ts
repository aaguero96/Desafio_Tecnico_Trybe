import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
  public id!: number;

  public task!: string;

  public createdAt!: Date;
  
  public status!: "pendente" | "em andamento" | "pronto";
};

Task.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  task: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

export default Task;