import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import Profile from './components/Profile.jsx';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile/>
    </WagmiConfig>
  )
}

export default App;