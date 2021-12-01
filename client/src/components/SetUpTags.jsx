const setupTags = (News) => {
  const allTags = {}

  News.forEach((item) => {
    if (allTags[item.type]) {
      allTags[item.type] = allTags[item.type] + 1
    } else {
      allTags[item.type] = 1
    }
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
