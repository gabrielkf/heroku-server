exports.up = knex => {
  return knex.schema.createTable('messages', table => {
    table.string('id').unique().primary();
    table
      .integer('room')
      .references('room')
      .inTable('sessions')
      .notNullable();
    table.string('messages').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('sessions');
};
