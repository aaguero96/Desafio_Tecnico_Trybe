module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          task: 'Limpar a mesa',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'pronto',
        },
        {
          task: 'Limpar a cozinha',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          status: 'em andamento',
        },
        {
          task: 'Concluir tarefa de casa',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
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
