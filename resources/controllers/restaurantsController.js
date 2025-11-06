const db = require('../models/db');

async function list(req, res) {
  const rows = await db('restaurants').select('*');
  res.json(rows);
}

async function getById(req, res) {
  const { id } = req.params;
  const row = await db('restaurants').where({ id }).first();
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
}

async function create(req, res) {
  const { name, address, phone } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  const [id] = await db('restaurants').insert({ name, address, phone });
  const created = await db('restaurants').where({ id }).first();
  res.status(201).json(created);
}

async function remove(req, res) {
  const { id } = req.params;
  await db('restaurants').where({ id }).del();
  res.status(204).send();
}

module.exports = { list, getById, create, remove };
