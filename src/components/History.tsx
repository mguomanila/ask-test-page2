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
      {/* <Table columns={columns} dataSource={data} /> */}
    </Card>
  )
}

export default History
