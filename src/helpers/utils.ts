const URL = {
  api: '/api',
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
    case "txlist":
      api += `?module=account` +
        `&action=txlist` +
        `&address=${config.address}` +
        `&startblock=0` +
        `&endblock=99999999` +
        `&page=1` +
        `&offset=50` +
        `&sort=asc` +
        `&apikey=${apikey}`
      break
    case 'txlistinternal':
      api += `?module=account` +
        `&action=txlistinternal` +
        `&txhash=${config.address}` +
        `&apikey=${apikey}`
      break
    case 'gettxreceiptstatus':
      api += `?module=transaction` +
        `&action=gettxreceiptstatus` +
        `&txhash=${config.address}` +
        `&apikey=${apikey}`
      break
  }
  console.log(`url:${api}`)
  const response = await fetch(
    api,
    {
      method: config.method,
      mode: 'cors',
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }
  )

  return response
}
