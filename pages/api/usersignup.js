import bcrypt from 'bcrypt'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) => {
  if (req.method === 'POST' && req.body) {
    // create user with hashed password

    res.status(200).json({ success: 'Success' })
  } else {
    res.status(400).json({ error: 'This method is not allowed and/or invalid data' })
  }
}

export default connectDb(handler)
