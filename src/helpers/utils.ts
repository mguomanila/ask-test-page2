const URL = {
  api: 'https://deep-index.moralis.io/api/v2',
}

interface Config {
  get_param: string
  method: string
  wallet: string
}

export async function ajax(key: string, config: Config) {
  const url = URL.api + `/${config.wallet}/logs?chain=polygon`
  console.log(`url:${url}`)
  const response = await fetch(
    url,
    {
      method: config.method,
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.X_API_KEY
      }
    }
  )

  return response
}
