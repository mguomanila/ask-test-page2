import { useMoralis, useNativeBalance } from "react-moralis"
import type { BaseProps } from "./Base";

interface Props extends BaseProps {}

function NativeBalance(props: Props) {
  const { data: balance } = useNativeBalance(props)
  const { account, isAuthenticated } = useMoralis()

  if (!account || !isAuthenticated) return null

  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      {balance.formatted}
    </div>
  )
}

export default NativeBalance
