const User = require('../model/User')
const router = require('express').Router()

router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router