// C:\Users\anujw\OneDrive\Desktop\StockAnalysis\frontend\src\pages\LearnPage.js
import React from 'react';
import './LearnPage.css';

const LearnPage = () => {
  return (
    <div className="learn-page">
      <h1>Fundamental Analysis: Key Financial Ratios for Selecting the Best Stocks</h1>
      <p>
        When selecting the best stocks for investment, we use a set of key financial ratios to assess the company's performance and stability. Here's how each ratio is used in our analysis:
      </p>
      
      <div className="ratio">
        <h2>1. Price-to-Earnings (P/E) Ratio</h2>
        <p><strong>Definition:</strong> Measures how much investors are willing to pay for a stock relative to its earnings. A high P/E ratio may suggest growth expectations, while a low P/E ratio might indicate undervaluation or potential issues.</p>
        <p><strong>Selection Criteria:</strong> Favor stocks with a positive and low P/E ratio.</p>
      </div>

      <div className="ratio">
        <h2>2. Price-to-Book (P/B) Ratio</h2>
        <p><strong>Definition:</strong> Compares the market value of a company’s equity to its book value. A P/B ratio above 1 indicates that the stock is trading at a premium over its book value.</p>
        <p><strong>Selection Criteria:</strong> Choose stocks with a positive P/B ratio of less than 1.</p>
      </div>

      <div className="ratio">
        <h2>3. Current Ratio</h2>
        <p><strong>Definition:</strong> Assesses a company’s ability to pay short-term liabilities using short-term assets. A ratio above 1 indicates strong liquidity.</p>
        <p><strong>Selection Criteria:</strong> Prefer companies with the highest current ratio.</p>
      </div>

      <div className="ratio">
        <h2>4. Debt-to-Equity (D/E) Ratio</h2>
        <p><strong>Definition:</strong> Compares a company’s total debt to its equity. A lower ratio suggests less financial risk and greater stability.</p>
        <p><strong>Selection Criteria:</strong> Opt for stocks with a lower D/E ratio. However, high D/E ratios can be acceptable if accompanied by a high Interest Coverage Ratio.</p>
      </div>

      <div className="ratio">
        <h2>5. Interest Coverage Ratio</h2>
        <p><strong>Definition:</strong> Measures how well a company can cover its interest payments with its earnings. A higher ratio indicates a better ability to meet interest obligations.</p>
        <p><strong>Selection Criteria:</strong> Favor stocks with a high Interest Coverage Ratio.</p>
      </div>

      <div className="ratio">
        <h2>6. Net Profit Margin</h2>
        <p><strong>Definition:</strong> Shows the percentage of revenue remaining as profit after all expenses. A higher margin indicates better profitability.</p>
        <p><strong>Selection Criteria:</strong> Select stocks with a high Net Profit Margin. Also, ensure that the difference between the Net Profit Margin and Net Cash Flow Margin is minimal.</p>
      </div>

      <div className="ratio">
        <h2>7. Cash Flow Margin</h2>
        <p><strong>Definition:</strong> Measures the percentage of revenue converted into operating cash flow. A higher margin suggests efficient cash generation from operations.</p>
        <p><strong>Selection Criteria:</strong> Choose stocks with the highest Cash Flow Margin. Additionally, check that the difference between Cash Flow Margin and Net Profit Margin is minimal.</p>
      </div>
    </div>
  );
};

export default LearnPage;
