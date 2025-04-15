import jwt from 'jsonwebtoken';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET!);
    const userId = decoded.sub;

    // TODO Query Supabase using admin role to fetch secure data
    // or validate user access

    return res.status(200).json({ message: `Hello user ${userId}` });
  } catch (err) {
    return res.status(403).json({ error: err });
  }
}
