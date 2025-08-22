import React, { useState } from 'react';
import { createMemory } from '../lib/stacks';

interface MemoryUploadProps {
  userAddress: string | null;
}

export const MemoryUpload: React.FC<MemoryUploadProps> = ({ userAddress }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('photo');
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAddress) return;

    setLoading(true);
    try {
      const mockIpfsHash = `Qm${Math.random().toString(36).substring(7)}`;
      
      await createMemory(
        userAddress,
        title,
        description,
        mockIpfsHash,
        category,
        undefined,
        isPrivate
      );

      setTitle('');
      setDescription('');
      setCategory('photo');
      setIsPrivate(false);
    } catch (error) {
      console.error('Error creating memory:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Upload New Memory</h3>
      {!userAddress && (
        <p style={{color: '#666', marginBottom: '16px'}}>
          Connect your wallet to enable memory uploads
        </p>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My Family Photo"
            disabled={!userAddress}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A beautiful moment from our vacation..."
            disabled={!userAddress}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            disabled={!userAddress}
          >
            <option value="photo">Photo</option>
            <option value="document">Document</option>
            <option value="video">Video</option>
            <option value="letter">Letter</option>
            <option value="audio">Audio</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              disabled={!userAddress}
            />
            Private Memory
          </label>
        </div>

        <button 
          type="submit" 
          className="btn" 
          disabled={!userAddress || loading}
        >
          {loading ? 'Uploading...' : 'Upload Memory'}
        </button>
      </form>
    </div>
  );
};