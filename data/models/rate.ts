// Rate model
// ==========
//
// Formats an API response exchange rate to a model suitable for consumption
// in the app.

export default function rate(apiReponse: APIResponse): Rate {
  const key: string = Object.keys(apiReponse)[0]
  const [from, to] = key.split('_')
  const rate: number = apiReponse[key]

  return {
    id: Math.random().toString(36).slice(2),
    from,
    to,
    exchange: rate,
    timestamp: +new Date(),
  }
}
