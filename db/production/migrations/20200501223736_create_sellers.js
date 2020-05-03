exports.up = knex => {
  return knex.schema.createTable('sellers', table => {
    table.increments('id').unique().primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password_hash').notNullable();
    table.string('cpf').notNullable();
    table.integer('score');
    table.integer('phone_area').notNullable();
    table.integer('phone_number').notNullable();
    table.string('avatar_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('sellers');
};
