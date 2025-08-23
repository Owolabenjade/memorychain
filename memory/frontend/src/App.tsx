import React, { useState } from 'react';
import { WalletConnection } from './components/WalletConnection';
import { MemoryUpload } from './components/MemoryUpload';
import { FamilyManagement } from './components/FamilyManagement';
import { Statistics } from './components/Statistics';
import { ContractStatus } from './components/ContractStatus';

function App() {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const handleWalletConnect = (address: string) => {
    setUserAddress(address);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">MemoryChain</div>
            <WalletConnection onConnect={handleWalletConnect} />
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="card">
          <h1>Family Memory Preservation on Bitcoin</h1>
          <p>
            Store, encrypt, and inherit your most precious memories across generations,
            secured by Bitcoin's immutability through Stacks.
          </p>
          <div style={{marginTop: '16px', padding: '12px', background: '#e3f2fd', borderRadius: '4px'}}>
            <strong>Level 2 MVP Status:</strong> Core functionality complete. Ready for Level 3 expansion.
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          <MemoryUpload userAddress={userAddress} />
          <FamilyManagement userAddress={userAddress} />
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          <Statistics userAddress={userAddress} />
          <ContractStatus />
        </div>

        <div className="card">
          <h3>Development Summary</h3>
          <p>
            Development going smoothly.
          </p>
          <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>
            Next phase will add IPFS integration, client-side encryption, and testnet deployment.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;