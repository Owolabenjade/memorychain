import React, { useState } from 'react';
import { WalletConnection } from './components/WalletConnection';
import { MemoryUpload } from './components/MemoryUpload';
import { FamilyManagement } from './components/FamilyManagement';

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
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
          <MemoryUpload userAddress={userAddress} />
          <FamilyManagement userAddress={userAddress} />
        </div>

        <div className="card">
          <h3>Development Status</h3>
          <ul>
            <li>✅ Smart contracts deployed and working</li>
            <li>✅ Frontend with wallet connection</li>
            <li>✅ Memory upload functionality</li>
            <li>✅ Family management interface</li>
            <li>🔄 Tutorial and documentation</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;