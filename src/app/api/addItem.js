export default function handler(req, res) {
    const { code, itemName } = req.body;
  
    if (req.method === 'POST') {
      if (shoppingLists[code]) {
        const newItem = {
          id: new Date().getTime(),
          name: itemName,
          reservedBy: null,
          completed: false
        };
        shoppingLists[code].items.push(newItem);
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'List not found' });
      }
    } else {
      res.status(405).end(); // Methode nicht erlaubt
    }
  }
  