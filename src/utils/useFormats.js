export function formatRate(animeRate) {
  const formattedRate = animeRate / 10
  return formattedRate
}

export function formatPopularity(popularity) {
  const formattedPopularity = popularity / 1000
  const fixedPopularity = formattedPopularity.toFixed(1)
  return fixedPopularity
}
