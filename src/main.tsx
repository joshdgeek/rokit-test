import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RokitPaySolUsdc } from "rocketx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <RokitPaySolUsdc
        chain="sol-usdc"
        rpc="https://solana-mainnet.g.alchemy.com/v2/WgvbZkWJ0BBttyRTOeZh2" />
    </div>
    <p className='text-2xl'>bonafied</p>
  </StrictMode>,
)
