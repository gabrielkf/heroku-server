exports.up = knex => {
  return knex.schema.createTable('sessions', table => {
    table.increments('id').unique().primary();
    table
      .integer('seller_id')
      .references('id')
      .inTable('sellers')
      .notNullable();
    table
      .integer('client_id')
      .references('id')
      .inTable('clients')
      .notNullable();
    table.string('room').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('sessions');
};
