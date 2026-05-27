import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Pure React Bootstrap elements
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trafficData } from '../data/trafficData'; // External Data Imported
import { ArrowRight } from 'react-bootstrap-icons';

// Figma Orange Circular Bubble Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#FF6A39',
          color: '#fff',
          padding: '6px 14px',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '13px',
          border: 'none',
          boxShadow: '0px 8px 16px rgba(254, 72, 11, 0.3)',
          textAlign: 'center'
        }}
      >
        {`${(payload[0].value / 1000).toFixed(1)}k`}
      </div>
    );
  }
  return null;
};

const TrafficChart = () => {
  return (
    <div className="card border-0 p-4 bg-white rounded-4">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h4 className=" text-dark m-0 fs-5" style={{ fontSize: '18px', letterSpacing: '-0.5px' }}>Traffic</h4>
        <a href="/dashboard" className="text-muted text-decoration-none fw-medium small d-flex align-items-center gap-1">
          More<span><img src='./src/assets/icons/arrow-right.svg' alt='edit pen'/></span>
        </a>
      </div>

      {/* Stats Section */}
      <Row className="mb-4 w-100 gx-3 gy-0 ps-1">

        {/* Item 1: Store Visits */}
        <Col xs={6} className="d-flex">
          <Card className="border-0  p-4 rounded-4 shadow w-100">
            <Card.Body className="p-0 d-flex flex-column">
              {/* Label and Percentage Row */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-secondary small fw-medium fs-5">Store Visists</span>
                <span className="text-success small fw-bold">+22%</span>
              </div>
              {/* Counter Metric */}
              <h2 className="fw-bold  m-0 fs-3">8950</h2>
            </Card.Body>
          </Card>
        </Col>

        {/* Item 2: Visitors */}
        <Col xs={6} className="d-flex">
          <Card className="border-0  p-4 rounded-4 shadow w-100">
            <Card.Body className="p-0 d-flex flex-column">
              {/* Label and Percentage Row */}
              <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-secondary small fw-medium fs-5">Vistors</span>
                <span className="text-warning small fw-bold">-24%</span>
              </div>
              
              <h2 className="fw-bold  m-0  fs-3">1520</h2>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Chart Subtitle context line */}
      <p className="text-muted small fw-medium mb-3" style={{ color: '#A0A7AF', fontSize: '13px' }}>
        Jan 16 - Jan 30 store visits chart
      </p>

      {/* Chart Canvas Engine Area */}
      <div style={{ width: '100%', height: '170px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trafficData} margin={{ top: 15, right: 10, left: 10, bottom: 0 }}>
            {/* Subtle horizontal grid scales */}
            <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#A0A7AF', fontSize: 13, fontWeight: 500 }}
              dy={10}
            />

            <YAxis hide domain={['dataMin - 200', 'dataMax + 200']} />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Line
              type="monotone"
              dataKey="visits"
              stroke="#FF6A39"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#FF6A39', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;
