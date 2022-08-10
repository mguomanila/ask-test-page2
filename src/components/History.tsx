import React from 'react'

interface Props {
  results: Array<any>;
}

function History (props: Props) {
  return (
    <div className="mt-5">
      <p className="text-lg font-bold">History</p>
      <table className="table-auto">
        <thead>
          <td>Status</td>
          <td>Amount(ASK)</td>
          <td>Date</td>
          <td>From Address</td>
          <td>To Address</td>
          <td>Transaction ID</td>
        </thead>
        <tbody>
        {props.results && props.results.map((block) => (
          <tr>
            <td>{''}</td>
            <td>{block.value}</td>
            <td>{block.timestamp}</td>
            <td>{block.from}</td>
            <td>{block.to}</td>
            <td>{block.blockHash}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default History
