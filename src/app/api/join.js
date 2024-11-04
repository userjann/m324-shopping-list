let shoppingLists = {}; // Temporäre Speicherung bleibt hier für alle APIs

export default function handler(req, res) {
  const { code, memberName } = req.body;
  
  if (req.method === 'POST') {
    if (shoppingLists[code]) {
      shoppingLists[code].members.push(memberName);
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'List not found' });
    }
  } else {
    res.status(405).end(); // Methode nicht erlaubt
  }
}
