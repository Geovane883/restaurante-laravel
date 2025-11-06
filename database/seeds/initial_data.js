exports.seed = async function(knex) {
  await knex('orders').del();
  await knex('restaurants').del();

  await knex('restaurants').insert([
    { id: 1, name: 'Restaurante Exemplo A', address: 'Rua A, 123', phone: '1111-1111' },
    { id: 2, name: 'Restaurante Exemplo B', address: 'Av. B, 456', phone: '2222-2222' }
  ]);

  await knex('orders').insert([
    { id: 1, restaurant_id: 1, customer_name: 'João', items: JSON.stringify([{name:'Prato X', qty:1, price:20}]), total: 20.00, status: 'delivered' }
  ]);
};
