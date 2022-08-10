import React from 'react'
import { QrcodeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import Address from './components/Address'
import WalletHistory from './components/History'
import { ajax } from './helpers/utils'


export default function App() {
  const [totalBalance, setTotalBalance] = React.useState(0)
  const [address, setAddress] = React.useState('')
  const [results, setResults] = React.useState('')
  const input = React.useRef<any>()

  async function addressHandler(_e: any) {
    let resp, json
    setAddress(input.current.value)
    const config = {
      method: 'GET',
      address: input.current.value,
    }
    resp = await ajax('balance', config)
    json = await resp.json()
    console.log(json)
    setTotalBalance(json.result)
    resp = await ajax('txlist', config)
    json = await resp.json()
    console.log(json)
    setResults(json.result)
  }

  return (
    <div className="mx-8 my-8">
      <div className="text-2xl leading-12">
        <div className="font-bold">Wallets with ASK</div>
        <p className="text-sm leading-10">
          Track and manage your ASK holdings across all of the wallets that you
          use.
        </p>
      </div>
      <div className="container flex flex-nowrap border rounded h-40 bg-slate-200">
        <div className="w-2/5 leading-10">
          <p className="font-bold text-lg mt-3">
            ASK
            <QuestionCircleOutlined className="p-px"/>
          </p>
          <p>Total Balance:</p> <p className="font-bold">{totalBalance}</p>
        </div>
        <div className="w-full leading-10">
          <p className="text-lg font-bold mt-3">Welcome to ASK Wallet Page.</p>
          <p>Please enter a wallet address:</p>
          <input className="w-3/5"
            name="Wallet"
            ref={input}
            value={address}
            onChange={addressHandler}
          />
        </div>
      </div>
      <div className="flex flex-nowrap w-full leading-10 bg-slate-100 mt-5 mr-5">
        <div className="flex flex-col w-1/3 h-40">
          <p className="text-lg font-bold pt-5">Receive ASK</p>
          <p>ERC-20</p>
          <Address address={address} size={6} copyable />
        </div>
        <div className="w-1/3">
          <p>
            Share this QR code or public key with whomever is sending you ASK
          </p>
        </div>
        <div className="w-full">
          <QrcodeOutlined />
        </div>
      </div>
      <WalletHistory results={results as unknown as any[]} />
    </div>
  );
}

