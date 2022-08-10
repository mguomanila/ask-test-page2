import React from 'react'
import { Card,  } from 'antd'
import { QrcodeOutlined, } from '@ant-design/icons'
import Address from './components/Address'
import WalletHistory from './components/History'
import { ajax } from './helpers/utils'
import './App.scss'

const styles = {
  title: {
    fontSize: "18px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    "flexDirection": "column",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "100%",
    fontSize: "15px",
    fontWeight: "400",
    flex: 'auto',
  },
}

function App() {
  const [totalBalance, setTotalBalance] = React.useState(0)
  const [address, setAddress] = React.useState('')
  const input = React.useRef<any>()

  async function addressHandler(_e: any) {
    setAddress(input.current.value)
      const resp = await ajax('balance', {
          method: 'GET',
          address: input.current.value,
      })
      const json = await resp.json()
      console.log(json)
      setTotalBalance(json.result)
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <Card
        title={<div>Wallets with ASK</div>}
      >
        <p>
          Track and manage your ASK holdings across all of the wallets that you
          use.
        </p>
      </Card>
      <div className="App-header">
          <Card style={styles.card}>
            <p style={styles.title}>ASK</p>
            <p>Total Balance:</p> {totalBalance}
          </Card>
          <Card style={styles.card}>
            <p style={styles.title}>Welcome to ASK Wallet Page.</p>
            <p>Please enter a wallet address:</p>
            <input name="Wallet"
              ref={input}
              value={address}
              onChange={addressHandler}
            />
          </Card>
      </div>
      <Card style={styles.card} className="QR-code">
        <div>
          <p style={styles.title}>Receive ASK</p>
          <p>ERC-20</p>
          <Address address={address} size={6} copyable />
        </div>
        <div>
          <p>Share this QR code or public key with whomever is sending you ASK</p>
        </div>
        <div>
          <QrcodeOutlined />
        </div>
      </Card>
      <WalletHistory wallet={address}/>
    </div>
  )
}

export default App
