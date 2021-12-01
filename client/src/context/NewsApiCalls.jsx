import axios from 'axios'
import { NewsFailure, NewsStart, NewsSuccess } from './NewsActions'

export const getNews = async (dispatch) => {
  dispatch(NewsStart)
  try {
    const res = await axios.get('/api/news/Categories/trending news')
    dispatch(NewsSuccess(res.data))
  } catch (err) {
    dispatch(NewsFailure(err))
  }
}

export const getEditorialPicks = async (dispatch) => {
  dispatch(NewsStart)
  try {
    const res = await axios.get('/api/news/Categories/editorial picks')
    dispatch(NewsSuccess(res.data))
  } catch (err) {
    dispatch(NewsFailure(err))
  }
}
