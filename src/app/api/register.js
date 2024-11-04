import { v4 as uuidv4 } from 'uuid';

let shoppingLists = {}; // Temporäre Speicherung

export default function handler(req, res) {
  if (req.method === 'POST') {
    const code = uuidv4().slice(0, 6); // 6-stelliger Code
    shoppingLists[code] = { items: [], members: [] };
    res.status(200).json({ code });
  } else {
    res.status(405).end(); // Methode nicht erlaubt
  }
}
