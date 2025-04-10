import { NextApiRequest, NextApiResponse } from 'next';
import guestbookData from '../../src/data/guestbook.json';
import { IconEntry } from '../../src/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IconEntry[]>
) {
  res.status(200).json(guestbookData);
}
