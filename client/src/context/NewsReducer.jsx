const Reducer = (state, action) => {
  switch (action.type) {
    case 'NEWS_START':
      return {
        News: null,
        isFetching: true,
        error: false,
      }
    case 'NEWS_SUCCESS':
      return {
        News: action.payload,
        isFetching: false,
        error: false,
      }
    case 'NEWS_FAILURE':
      return {
        News: null,
        isFetching: false,
        error: true,
      }

    default:
      return state
  }
}

export default Reducer
