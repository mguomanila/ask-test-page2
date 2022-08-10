const URL = {
  api: 'https://api.polygonscan.com/api',
}

interface Config {
  method: string
  address: string
}

const apikey = process.env.API_KEY

export async function ajax(action: string, config: Config) {
  let api = URL.api
  switch(action) {
    case 'balance':
      api += `?module=account` +
        `&action=balance` +
        `&address=${config.address}` +
        `&apikey=${apikey}`
      break
  }
  console.log(`url:${api}`)
  const response = await fetch(
    api,
    {
      method: config.method,
      headers: {
        accept: 'application/json',
      }
    }
  )

  return response
}
