module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tasks = await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      task: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'created_at'
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return tasks;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};
