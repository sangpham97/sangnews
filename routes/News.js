const News = require('../model/New')
const router = require('express').Router()

//create comment

router.post('/', async (req, res) => {
  const newNews = new News(req.body)
  try {
    const savedNews = await newNews.save()

    res.status(200).json(savedNews)
  } catch (err) {
    res.status(500).json(err)
  }
})

//get News from type

router.get('/Types/:type', async (req, res) => {
  try {
    const TypeNews = await News.find({
      type: req.params.type,
    })
    res.status(200).json(TypeNews)
  } catch (err) {
    res.status(500).json(err)
  }
})

//get All News

router.get('/', async (req, res) => {
  try {
    const news = await News.find({})
    res.status(200).json(news)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/Categories/:category', async (req, res) => {
  try {
    const NewsCate = await News.find({ category: req.params.category })
    res.status(200).json(NewsCate)
  } catch (err) {
    res.status(500).json(err)
  }
})

//get a News

router.get('/:id', async (req, res) => {
  try {
    const ANews = await News.findById(req.params.id)
    res.status(200).json(ANews)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
