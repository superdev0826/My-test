import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../../../lib/db';

const handler: NextApiHandler = async (req, res) => {
  const client = await connectToDatabase();
  const db = client.db();
  switch (req.method) {
    case 'GET':
      try {
        const result = await db.collection('customers').find().toArray();
        res.status(200).json(result);
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }

      break;
    case 'POST':
      try {
        const { firstname, lastname, company, status, email, password } = req.body;

        const createResult = await db.collection('customers').insertOne({
          firstname,
          lastname,
          company,
          status,
          email,
          password,
        });
        const result = await db.collection('customers').find().toArray();
        res.status(200).json(result);
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }

      break;

    default:
      break;
  }
};

export default handler;
