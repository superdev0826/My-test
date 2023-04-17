import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../../../lib/db';
import { ObjectId } from 'mongodb';

const handler: NextApiHandler = async (req, res) => {
  const client = await connectToDatabase();
  const db = client.db();
  switch (req.method) {
    case 'PUT':
      try {
        const { id } = req.query;
        const { firstname, lastname, company, status, email, password } = req.body;
        if (id) {
          const data = await db
            .collection('customers')
            .findOneAndUpdate(
              { _id: new ObjectId(id.toString()) },
              { $set: { firstname, lastname, company, status, email, password } },
            );

          if (!data.value) {
            res.status(404).json({ message: 'Customer not found' });
            return;
          }
        }

        const result = await db.collection('customers').find().toArray();
        res.status(200).json(result);
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        if (id) {
          const data = await db
            .collection('customers')
            .findOneAndDelete({ _id: new ObjectId(id.toString()) });
          if (!data.value) {
            res.status(404).json({ message: 'User not found' });
            return;
          }
        }

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
