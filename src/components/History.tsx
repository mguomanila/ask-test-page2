
interface Props {
  results: Array<any> | boolean;
}

function History (props: Props) {
  return (
    <div className="mt-5">
      <p className="text-lg font-bold">History</p>
      <table className="table-auto w-5/6">
        <thead className="font-bold text-center">
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
            <td className="w-8">{''}</td>
            <td className="w-8 text-center">{block.value}</td>
            <td className="w-36">{Date(block.timeStamp).substring(0,25)}</td>
            <td className="w-36 text-center">{shortenAddress(block.from)}</td>
            <td className="w-36 text-center">{shortenAddress(block.to)}</td>
            <td className="w-36 text-center">{shortenAddress(block.blockHash)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

function shortenAddress(address : string, start = 6, endFrom = 4) {
  const START = 2;
  return `0x${address.slice(START, start)}...${address.slice(-endFrom)}`;
}


export default History
