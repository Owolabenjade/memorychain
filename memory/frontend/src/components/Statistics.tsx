import React from 'react';

interface StatisticsProps {
  userAddress: string | null;
}

export const Statistics: React.FC<StatisticsProps> = ({ userAddress }) => {
  return (
    <div className="card">
      <h3>Platform Statistics</h3>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
        <div>
          <strong>Total Memories</strong>
          <div style={{fontSize: '24px', color: '#007bff'}}>1</div>
        </div>
        <div>
          <strong>Total Families</strong>
          <div style={{fontSize: '24px', color: '#007bff'}}>1</div>
        </div>
        <div>
          <strong>Active Users</strong>
          <div style={{fontSize: '24px', color: '#007bff'}}>Demo Mode</div>
        </div>
        <div>
          <strong>Network</strong>
          <div style={{fontSize: '24px', color: '#007bff'}}>Stacks Testnet</div>
        </div>
      </div>
    </div>
  );
};