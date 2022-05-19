module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          task: 'Limpar a mesa',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'pronto',
        },
        {
          task: 'Limpar a cozinha',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'em andamento',
        },
        {
          task: 'Concluir tarefa de casa',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'pendente',
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
