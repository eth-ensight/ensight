<p align="center">
  <img src=".github/images/ensight-logo.png" width="180" alt="ENSight Logo" />
</p>

<h1 align="center">ENSight Backend</h1>

<p align="center">
  Intelligence and risk engine for ENSight — decoding wallet intent, enriching on-chain data, and powering real-time safety insights.
</p>

<p align="center">
  <a href="https://ethglobal.com" target="_blank">
    <img src="https://img.shields.io/badge/Community-ETHGlobal-blue" />
  </a>
  <a href="https://ethglobal.com/events/hackmoney2026/" target="_blank">
    <img src="https://img.shields.io/badge/Built%20at-HackMoney%202026-purple" />
  </a>
  <img src="https://img.shields.io/badge/Platform-Backend%20Services-black" />
</p>

---

## 🧠 Intent & Risk Engine

ENSight Backend transforms raw blockchain actions into meaningful, human-readable context.

It is responsible for:

- Decoding transaction calldata & method signatures  
- Enriching interactions with contract metadata  
- Applying risk heuristics & anomaly detection  
- Attaching trust & reputation signals  
- Generating explanation payloads for the extension & web app  

---

## 🔄 Backend Flow

### How it works

1. ENSight Extension intercepts wallet intent  
2. Structured payload is sent to backend  
3. Transaction is decoded & classified  
4. Risk and trust signals are applied  
5. Context is enriched with on-chain data  
6. Explanation response is returned in real time  

---

## ⛓️ On-Chain + Off-Chain Intelligence

### 🔗 On-Chain Data

- Transaction calldata & logs  
- Contract metadata & histories  
- ENS identity resolution  
- Wallet interaction graphs  

### 🧠 Off-Chain Intelligence

- Behavioral risk heuristics  
- Abnormal pattern detection  
- Reputation signals  
- Context interpretation  

Together this powers ENSight’s real-time safety layer.

---

## ⚙️ Tech Stack

- Node.js / TypeScript (or your actual backend stack)  
- Blockchain RPC providers  
- Transaction decoding utilities  
- REST / WebSocket APIs  

---

## 🧱 How ENSight Backend Fits In

```
ENSight Extension
↓
ENSight Backend (intent + risk engine)
↓
ENSight Web (dApp & context views)
↓
Ethereum + ENS
```

---

## 🛠 Project Setup

### Prerequisites

- Node.js 18+  
- npm or pnpm  

### Install

```bash
git clone https://github.com/eth-ensight/ensight-backend.git
cd ensight-backend
npm install
```

### Run locally

```bash
npm run dev
```

---

## 🔐 Environment Variables

```bash
RPC_URL=<your_rpc_provider>
PORT=4000
```

---

## 🤝 Contributing

🤝 Contributing
Contributions welcome across:
- Transaction decoding improvements
- Risk detection heuristics
- Performance optimizations
- API design
-  On-chain data enrichment

---

<sub>Part of the ENSight ecosystem • Built for open Web3 infrastructure</sub>
