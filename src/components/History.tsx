import React from 'react'
import { Card, } from "antd"

interface Props {
  wallet: string;
}

const { Meta } = Card

function History (props: Props) {
  {/* let columns, data */}

  return (
    <Card>
      <Meta title="History" />
    </Card>
  )
}

export default History
