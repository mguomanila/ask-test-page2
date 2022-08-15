import React from 'react'
import type { BaseProps } from "./Base";
import { ajax } from '../helpers/utils'

interface Props extends BaseProps {
}

export default function VerifyTransactionHash(_props: Props) {
  const [downloading, setDownloading] = React.useState(false);
  const [address, setAddress] = React.useState('')
  const [results, setResults] = React.useState([])
  const [message, setMessage] = React.useState(<></>)
  const input = React.useRef<any>()

  async function hashHandler(_e: any) {
    let resp, json
    setAddress(input.current.value)
    const config = {
      method: 'GET',
      address: input.current.value,
    }
    setDownloading(true)
    resp = await ajax('gettxreceiptstatus', config)
    json = await resp.json()
    console.log(json)
    if(json.result.status == 1) {
      setMessage(<div>Successful transaction.</div>)
    } else {
      setMessage(<div>Rejected or failed transaction.</div>)
    }
    resp = await ajax('txlistinternal', config)
    json = await resp.json()
    console.log(json)
    if(json.status == 0) {
        setResults(json.result)
    }
    setDownloading(false)
  }

  return (
    <section className="mt-5 mr-5 bg-slate-100 leading-10 p-4">
      <h1 className="font-bold text-lg">Verify Transaction Hash</h1>
      <p>Please enter your transaction hash:</p>
      <input className="w-3/5"
        name="hashAddres"
        ref={input}
        value={address}
        onChange={hashHandler}
      />
      {message}
      <div><h2 className="font-bold text-lg">Bonus:</h2>

      </div>
    </section>
  )
}
