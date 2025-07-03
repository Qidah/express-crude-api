let items = [
  { id: 1, name: 'First Item', description: 'This is your first item.' }
];

exports.getAllItems = (req, res) => {
  res.json(items);
};

exports.getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.json(item);
};

exports.createItem = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const index = items.findIndex(i => i.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  items[index] = { id, name, description };
  res.json(items[index]);
};

exports.deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  const deleted = items.splice(index, 1);
  res.json({ message: 'Item deleted successfully', deleted });
};
