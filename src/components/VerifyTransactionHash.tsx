import React from 'react'
import type { BaseProps } from "./Base";
import { ajax } from '../helpers/utils'

interface Props extends BaseProps {
}

export default function VerifyTransactionHash(_props: Props) {
  const [address, setAddress] = React.useState('')
  const input = React.useRef<any>()

  async function hashHandler(_e: any) {
    const config = {
      method: 'GET',
      address: input.current.value,
    }
    setAddress(input.current.value)
    const resp = await ajax('txlistinternal', config)
    const json = await resp.json()
    console.log(json)
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
    </section>
  );
}
