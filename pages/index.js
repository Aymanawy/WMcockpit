
import React, { useState } from 'react';

export default function Home() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Portfolio A");

  const portfolios = {
    "Portfolio A": {
      value: "$1,930,000",
      sharpeRatio: 1.2,
      var95: "$120,000",
      maxDrawdown: "8.5%",
      volatility: "11.2%",
    },
    "Portfolio B": {
      value: "$1,620,000",
      sharpeRatio: 0.95,
      var95: "$180,000",
      maxDrawdown: "12.7%",
      volatility: "14.4%",
    },
    "Consolidated": {
      value: "$3,550,000",
      sharpeRatio: 1.05,
      var95: "$150,000",
      maxDrawdown: "10.3%",
      volatility: "12.8%",
    }
  };

  const data = portfolios[selectedPortfolio];

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Wealth Cockpit</h1>

      <div style={{ margin: "10px 0", padding: "10px", backgroundColor: "#fff8dc", border: "1px solid #e6c200" }}>
        🔐 Privacy Guarantee: Your data is processed locally. We never store or access your portfolio.
      </div>

      <select value={selectedPortfolio} onChange={e => setSelectedPortfolio(e.target.value)}>
        {Object.keys(portfolios).map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <div style={{ marginTop: 20 }}>
        <h2>{selectedPortfolio}</h2>
        <p><strong>Total Value:</strong> {data.value}</p>
        <p><strong>Sharpe Ratio:</strong> {data.sharpeRatio}</p>
        <p><strong>VaR (95%):</strong> {data.var95}</p>
        <p><strong>Max Drawdown:</strong> {data.maxDrawdown}</p>
        <p><strong>Volatility:</strong> {data.volatility}</p>
      </div>
    </div>
  );
}
