const db = require('../models/db');

async function list(req, res) {
  const rows = await db('orders').select('*');
  res.json(rows.map(r => ({ ...r, items: JSON.parse(r.items || '[]') })));
}

async function create(req, res) {
  const { restaurant_id, customer_name, items } = req.body;
  const total = (items || []).reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);
  const [id] = await db('orders').insert({ restaurant_id, customer_name, items: JSON.stringify(items || []), total });
  const created = await db('orders').where({ id }).first();
  res.status(201).json({ ...created, items: JSON.parse(created.items) });
}

module.exports = { list, create };
