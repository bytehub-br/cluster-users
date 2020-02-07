const User = require('../models/User')

module.exports = {
  async create (req, res) {
    try {
      const newUser = new User(req.body)
      await newUser.save()
      return res.json({ success: true, user: newUser })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  },

  async read (req, res) {
    try {
      const { userId } = req.params
      const user = await User.findById(userId)

      return res.json({ success: true, user })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  },

  async update (req, res) {
    try {
      const { userId } = req.params
      const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, { new: true }).lean()
      return res.json({ success: true, user: updatedUser })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  },

  async delete (req, res) {
    try {
      const { userId } = req.params
      const user = await User.findByIdAndDelete(userId).lean()
      return res.json({ success: true, user })
    } catch (error) {
      return res.status(500).json({ success: false, error })
    }
  }

}
