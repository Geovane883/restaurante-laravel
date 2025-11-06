exports.up = function(knex) {
  return knex.schema
    .createTable('restaurants', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('address');
      table.string('phone');
      table.timestamps(true, true);
    })
    .createTable('orders', table => {
      table.increments('id').primary();
      table.integer('restaurant_id').unsigned().references('id').inTable('restaurants').onDelete('CASCADE');
      table.string('customer_name');
      table.text('items');
      table.decimal('total', 10, 2);
      table.string('status').defaultTo('pending');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('orders').dropTableIfExists('restaurants');
};
