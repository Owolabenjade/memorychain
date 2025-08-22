import React, { useState } from 'react';
import { WalletConnection } from './components/WalletConnection';
import { MemoryUpload } from './components/MemoryUpload';
import { FamilyManagement } from './components/FamilyManagement';
import { Statistics } from './components/Statistics';

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

        <Statistics userAddress={userAddress} />

        <div className="card">
          <h3>Development Journey</h3>
          <p>This development sprint demonstrates the core concept of MemoryChain. The smart contracts handle memory storage with family permissions, while the React frontend provides an intuitive interface for users.</p>
          <div style={{marginTop: '16px'}}>
            <span style={{color: '#28a745'}}>✓ Smart contracts working</span> |{' '}
            <span style={{color: '#28a745'}}>✓ Frontend integration</span> |{' '}
            <span style={{color: '#28a745'}}>✓ Family management</span> |{' '}
            <span style={{color: '#ffc107'}}>⟳ Tutorial published</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;