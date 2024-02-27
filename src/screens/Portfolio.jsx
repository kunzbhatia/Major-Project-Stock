// Portfolio.jsx
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Portfolio = () => {
  const generateDummyData = () => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      data.push({
        company: `Company ${i}`,
        aiPortfolioImprovement: `${Math.random() * 100}%`,
        trailStopLoss: `$${(Math.random() * 1000).toFixed(2)}`,
        equity: `$${(Math.random() * 10000).toFixed(2)}`,
        proportion: `${(Math.random() * 100).toFixed(2)}%`,
        avgCost: `$${(Math.random() * 100).toFixed(2)}`,
        profitLoss: `$${(Math.random() * 1000).toFixed(2)}`,
        totalValue: `$${(Math.random() * 10000).toFixed(2)}`
      });
    }
    return data;
  };

  const dummyData = generateDummyData();

  return (
    <Container>
      <div>
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vitae tortor feugiat, ullamcorper velit vel, dapibus urna.
        </p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>AI portfolio Improvement</th>
            <th>Trail Stop Loss</th>
            <th>Equity</th>
            <th>Proportion</th>
            <th>Avg Cost</th>
            <th>Profit Loss</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.aiPortfolioImprovement}</td>
              <td>{item.trailStopLoss}</td>
              <td>{item.equity}</td>
              <td>{item.proportion}</td>
              <td>{item.avgCost}</td>
              <td>{item.profitLoss}</td>
              <td>{item.totalValue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Portfolio;
