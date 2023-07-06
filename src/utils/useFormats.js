export function formatRate(animeRate) {
  const formattedRate = animeRate / 10
  return formattedRate
}

export function formatPopularity(popularity) {
  const formattedPopularity = popularity / 1000
  const fixedPopularity = formattedPopularity.toFixed(1)
  return fixedPopularity
}

export function formatTime(time) {
  const formattedTime = new Date(time * 1000).toLocaleString()

  return formattedTime
}
