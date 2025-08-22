# MemoryChain Architecture

## Contract Overview

### Core Contracts

**memory-storage.clar**
- Memory CRUD operations with privacy controls
- User and category statistics tracking
- Granular permission system for memory sharing
- Soft delete functionality

**family-access.clar**
- Family group management with role hierarchy
- Invitation system with expiration handling
- Member management and role assignment
- Access control for family-based operations

**memory-family-bridge.clar**
- Integration layer between memory and family contracts
- Family memory collection management
- Cross-contract permission validation
- Association tracking and statistics

## Data Flow
User → Frontend → Smart Contracts → IPFS Storage → Bitcoin Security

### Memory Creation Flow
1. User uploads file to IPFS
2. Frontend encrypts metadata
3. memory-storage contract stores metadata
4. Optional family association via bridge contract

### Family Access Flow
1. Family owner creates family group
2. Members invited with specific roles
3. Role-based access to family memories
4. Permission inheritance through family membership

## Security Model

- Client-side encryption before any storage
- Role-based access control (Owner > Admin > Member > Viewer)
- Smart contract authorization checks
- Bitcoin finality for ownership records

## Integration Points

- Stacks.js for wallet connection and transactions
- IPFS for decentralized file storage
- Future: Web3 Storage for redundancy
- Future: Mobile app integration

## Scalability Considerations

- Efficient data structures for large families
- Batch operations for multiple memories
- Caching strategies for frequently accessed data
- Future: Layer 2 optimizations