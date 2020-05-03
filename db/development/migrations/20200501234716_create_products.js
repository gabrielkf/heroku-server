exports.up = knex => {
  return knex.schema.createTable('products', table => {
    table.increments('id').unique().primary();
    table.string('title').notNullable();
    table.decimal('price').notNullable();
    table.string('brand').notNullable();
    table.string('category');
    table.boolean('male');
    table.boolean('female');
    table.string('image').notNullable();
    table.string('description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('products');
};
