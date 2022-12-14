import type { BaseProps } from "./Base";

interface Props extends BaseProps {
  results: Array<any>;
}

export default function History (props: Props) {
  return (
    <section className="mt-5 p-4 bg-slate-100 leading-10">
      <p className="text-lg font-bold">History</p>
      <table className="table-auto w-5/6">
        <thead className="font-bold text-center">
          <tr>
            <th>Status</th>
            <th>Amount(ASK)</th>
            <th>Date</th>
            <th>From Address</th>
            <th>To Address</th>
            <th>Transaction ID</th>
          </tr>
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
    </section>
  )
}

function shortenAddress(address : string, start = 6, endFrom = 4) {
  const START = 2;
  return `0x${address.slice(START, start)}...${address.slice(-endFrom)}`;
}
