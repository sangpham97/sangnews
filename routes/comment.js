const Comment = require('../model/Comment')
const News = require('../model/New')
const router = require('express').Router()

//create comment

router.post('/', async (req, res) => {
  const newComment = new Comment({
    email: req.body.email,
    username: req.body.username,
    postId: req.body.postId,
    text: req.body.text,
  })
  const FindNews = await News.findById(req.body.postId)

  if (FindNews) {
    try {
      const savedComment = await newComment.save()
      await FindNews.updateOne({ $push: { comments: savedComment._id } })
      res.status(200).json(savedComment)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('you can only comment your account')
  }
})

//get All comment in News

router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({
      postId: req.params.postId,
    })
    res.status(200).json(comments)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
