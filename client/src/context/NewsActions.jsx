export const NewsStart = () => ({
  type: 'NEWS_START',
})

export const NewsSuccess = (News) => ({
  type: 'NEWS_SUCCESS',
  payload: News,
})

export const NewsFailure = () => ({
  type: 'NEWS_FAILURE',
})
